require('dotenv').config()

const Slackbot = require('./Slackbot');
const HttpService = require('./HttpService');

const slackbot = new Slackbot(process.env.SLACK_API_KEY);

slackbot
  .onMessage()
  .do(message => console.log(message))
  .subscribe(message => {
    slackbot.sendMessage('Hello from slack!', message.channel);
  });

slackbot.start();