# SentimentBot

Simple Slackbot that recieves a message and returns whether is has a positive sentiment or not with a thumps up (or down) emoji. Created for research purposes.

## Dependencies

Node 8.5.0, npm 5.3.0. A `.nvmrc` file is provided for [nvm](https://github.com/creationix/nvm)

## Installation

Run the following command to install de dependencies

```
  npm install
```

## Run

Just run the following command

```
  npm start
```

This will start the bot in the current console

## Enviroment

Every critical information is provided as an enviroment variable.

**Slack:**
Since the slackbot needs a slack api key to work, one must be provided to the sdk. The project assumes it's set as an enviroment variable. This can be obtained in the Slack developer console when adding a bot integration. For further information, please refer to the [docs](https://api.slack.com/getting-started)

**Google Cloud Natural Language API:**
In order to authenticate with Google, a Service Account must be used. This type of authentication uses
a simple json file with the necessary information. Google's SDK automatically reads an enviroment variable that indicates where this file is located. For further information, please refer to the [docs](https://cloud.google.com/docs/authentication/getting-started?hl=es-419#auth-cloud-implicit-nodejs)

#### Configuration file 

[DotEnv](https://github.com/motdotla/dotenv) was used to provide this variables in development, so to run the bot locally, please provide a `.env` file with every key set.

## External dependencies

* **[RxJs 5.4.3](https://github.com/Reactive-Extensions/RxJS)**: To manage asynchrony nicely!
* **[DotEnv 4.0.0](https://github.com/motdotla/dotenv)**: To manage enviroment variables easily
* **[Google Cloud Language 1.1.0](https://github.com/googleapis/nodejs-language/)**: Official library provided by Google to interact with it's Natural Language API
* **[Slack Client 3.14.1](https://github.com/googleapis/nodejs-language/)**: Official library provided by slack to interact with it's API

## Deployment

Since the Google Cloud SDK requires to have the json file present when the application is running, and this file contains sensitive information that should not be hosted in github, the deployment process is quite messy.

Heroku is recommended platform for deployment due to its ease of use. The process is the following

* Create a branch from `master` called `deployment`
* In this branch, remove the `.json` config file from the .gitignore
* Commit this change, and afterwards perform a deployment from this branch (`git push heroku deployment:master`)

**Important** : _Never_, _Ever_, push the `deployment` branch to the remote repository.

This process can be easily automated with a build script. It may be done afterwards. 
