const Constants = require('./Constants');
const Sentiment = require('./Sentiment');
const SentimentAnalyzer = require('./SentimentAnalyzer');
const Slackbot = require('./Slackbot');

class SentimentBot {
  constructor() {
    this.slackbot = new Slackbot(process.env.SLACK_API_KEY);
    this.sentimentAnalyzer = new SentimentAnalyzer();
  }

  run() {
    this.listenForMessages();
    this.slackbot.start();
  }

  listenForMessages() {
    this.slackbot
      .onMessage()
      .flatMap(message => this.analyzeSentiment(message))
      .map(response => this.createMessageFromSentiment(response))
      .subscribe(response => this.slackbot.sendMessage(response.message, response.channel));
  }

  analyzeSentiment(message) {
    return this.sentimentAnalyzer.analyzeSentiment(message.text)
      .map(sentiment => {
        return {
          channel: message.channel,
          sentiment,
        };
      });
  }

  createMessageFromSentiment(response) {
    const message = response.sentiment === Sentiment.POSITIVE ? Constants.MESSAGES.POSITIVE : Constants.MESSAGES.NEGATIVE;
    return {
      channel: response.channel,
      message,
    };
  }

}

module.exports = SentimentBot;