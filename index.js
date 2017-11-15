const constants = require('./Constants');
const Slackbot = require('./Slackbot');
const HttpService = require('./HttpService');

const slackbot = new Slackbot(constants.SLACK_API_KEY);

slackbot
  .onMessage()
  .do(message => console.log(message))
  .subscribe(message => {
    slackbot.sendMessage('Hello from slack!', message.channel);
  });

slackbot.start();