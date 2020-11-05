// const localForage = requrire("localforage");

// localForage.setItem('transaction', value).then(function () {
//   return localForage.getItem('key');
// }).then(function (value) {
//   console.log("Budget has ben saved", value);
// }).catch(function (err) {
//   console.log("error: \n", err)
// });

// --- 2nd attempt ---

// localforage.setDriver([
//   localforage.INDEXEDDB,
//   localforage.WEBSQL,
//   localforage.LOCALSTORAGE
// ]).then(function () {
//   var key = 'STORE_KEY';
//   // var value = 'What we save offline';
//   var value = 'asdf';
//   value[0] = 65
//   // var value = undefined;
//   var UNKNOWN_KEY = 'unknown_key';

//   localforage.setItem(key, value, function() {
//     console.log('Using:' + localforage.driver());
//     console.log('Saved: ' + value);

//     localforage.getItem(key).then(function(readValue) {
//       console.log('Read: ', readValue);
//     });

//     // Since this key hasn't been set yet, we'll get a null value
//     localforage.getItem(UNKNOWN_KEY, function(err, readValue) {
//       console.log('Result of reading ' + UNKNOWN_KEY, readValue);
//     });
//   });
// });

// -----------------------------------------

let transactions = [];
let myChart;

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    populateTotal();
    populateTable();
    populateChart();
  });

function populateTotal() {
  // reduce transaction amounts to a single total value
  let total = transactions.reduce((total, t) => {
    return total + parseInt(t.value);
  }, 0);

  let totalEl = document.querySelector("#total");
  totalEl.textContent = total;
}

function populateTable() {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  transactions.forEach(transaction => {
    // create and populate a table row
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${transaction.name}</td>
      <td>${transaction.value}</td>
    `;

    tbody.appendChild(tr);
  });
}

function populateChart() {
  // copy array and reverse it
  let reversed = transactions.slice().reverse();
  let sum = 0;

  // create date labels for chart
  let labels = reversed.map(t => {
    let date = new Date(t.date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  });

  // create incremental values for chart
  let data = reversed.map(t => {
    sum += parseInt(t.value);
    return sum;
  });

  // remove old chart if it exists
  if (myChart) {
    myChart.destroy();
  }

  let ctx = document.getElementById("myChart").getContext("2d");

  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: "Total Over Time",
        fill: true,
        backgroundColor: "#6666ff",
        data
      }]
    }
  });
}

function sendTransaction(isAdding) {
  let nameEl = document.querySelector("#t-name");
  let amountEl = document.querySelector("#t-amount");
  let errorEl = document.querySelector(".form .error");

  // validate form
  if (nameEl.value === "" || amountEl.value === "") {
    errorEl.textContent = "Missing Information";
    return;
  }
  else {
    errorEl.textContent = "";
  }

  // create record
  let transaction = {
    name: nameEl.value,
    value: amountEl.value,
    date: new Date().toISOString()
  };

  // if subtracting funds, convert amount to negative number
  if (!isAdding) {
    transaction.value *= -1;
  }

  // add to beginning of current array of data
  transactions.unshift(transaction);

  // re-run logic to populate ui with new record
  populateChart();
  populateTable();
  populateTotal();

  // also send to server
  fetch("/api/transaction", {
    method: "POST",
    body: JSON.stringify(transaction),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.errors) {
        errorEl.textContent = "Missing Information";
      }
      else {
        // clear form
        nameEl.value = "";
        amountEl.value = "";
      }
    })
    .catch(err => {
      // fetch failed, so save in indexed db
      // console.log("Fetch Failed Test", err);
      // console.log("This is the transaction",transaction);
      saveRecord(transaction);

      // clear form
      nameEl.value = "";
      amountEl.value = "";
    });
}

// function saveRecord(transaction) {
//   console.log("inside savedRecord", transaction);
//   // push in the offline transaction obj into the transaction array
//   transactions.push(transaction);
//   console.log("Here is the new transaction array", transactions);
// };

//   localForage.setItem('budget', transaction).then(() => {
//     console.log("Budget has ben saved");
//   })
// };

// function getDataFromForage(key) {
//   if (!localForage.getItem(key)) return;
//   else {
//     localForage.getItem(key);
//   }
// }

// getDataFromForage('budget').then((response) => {
//   console.log('here', response);
// });

// save offline transactions in indexDB or local storage
// when you come back online, check local storage or indexed DB for the offline transactions and compare to the online Atlas DB
// Store "isAdding" as true or false in the sendTransaction()
// Run each of the offline transactions through a new (simlar) sendTransaction function

document.querySelector("#add-btn").onclick = function () {
  sendTransaction(true);
};

document.querySelector("#sub-btn").onclick = function () {
  sendTransaction(false);
};
