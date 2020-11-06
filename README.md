# PWA-Budget-Tracker

![License: MIT](https://img.shields.io/badge/license-MIT%20License-blue.svg) </br>
![badge: Made With-JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-Yellow) ![badge: Made With-CSS3](https://img.shields.io/badge/Made%20With-CSS3-Yellow) ![badge: Made With-HTML5](https://img.shields.io/badge/Made%20With-HTML5-Yellow) </br>
![badge: Uses-compression](https://img.shields.io/badge/Uses-express-red) ![badge: Uses-morgan](https://img.shields.io/badge/Uses-morgan-red) ![badge: Uses-MongoDB](https://img.shields.io/badge/Uses-Mongo-orange) ![badge: Uses-IndexedDB](https://img.shields.io/badge/Uses-IndexedDB-orange) ![badge: Uses-Mongoose](https://img.shields.io/badge/Uses-Mongoose-orange) ![badge: Uses-Node.JS](https://img.shields.io/badge/Uses-Node.JS-orange)</br>

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

## Table of Contents
[Deployed Application](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#deployed-application)

[Installation](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#installation)

[Usage](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#usage)

[Screenshots](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#screenshots)

[Testing](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#testing)

[Future Updates](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#future-updates)

[Questions](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#questions)

[Credits](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#credits)

[License](https://github.com/Rogers-Development-Services/PWA-Budget-Tracker#license)

## Deployed Application

Here is the [deployed application](https://mighty-reaches-52293.herokuapp.com/).

## Installation

Download this package, open your command line interface and run npm install. This should install the following dependencies aswell: Express, mongoose, path, and morgan. If for some reason, you need to install the dependencies individually run npm install "dependency_name".

Next run the following command to install the app: 

```bash
npm install 
```

```bash
npm install express
```

Note: This app is run on a Heroku server, it is not necessary to download.

## Usage 

If you have downloaded the repository and have cloned the package to your machine, and have installed all dependencies, begin by typing "npm run watch". 

```bash
npm run watch 
```

When you start the application, you will have two options to either deposite or withdrawl from your budget tracker app. Enter the ammount of money you'd like to track your current transaction whether online or offline and press your respective button. If you make a change offline and you want it to be synced with your online information, make sure you connect to the internet and refresh the application.

Note: Don't use negative numbers when submitting a new transaction.

### Screenshots

![Deployed Application](https://user-images.githubusercontent.com/38272211/98400184-76d66c80-2018-11eb-920b-12b628b25c20.JPG)

![Deployed Application1](https://user-images.githubusercontent.com/38272211/98400367-bbfa9e80-2018-11eb-8885-14264132385c.JPG)

## Testing

Testing Instructions: Currently, there are no written tests for this application, but if you wish to write your, change the scripts property in package json file.

```bash
npm install jest
```

```bash
npm test
```

## Future Updates
This application is a work in progress, future updates will include: 
1. Set up the application's offline database to utilize local forage instead of indexedDB.

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: 
[Rogers-Development-Services](https://www.github.com/Rogers-Development-Services) | [Portfolio](https://rogers-development-services.github.io/Portfolio/index.html)


Email: 
[matthew.shane.rogers@gmail.com](matthew.shane.rogers@gmail.com)

## Credits

Code template provided by Trilogy Education 

Thanks to [Steven Langraf](https://www.linkedin.com/in/slandgra/) for troubleshooting and debugging assistance.

## Licenses
Licensed under the MIT License lincense.