const RtmClient = require('@slack/client').RtmClient;
const REAL_TIME_EVENTS = require('@slack/client').RTM_EVENTS;
const { Observable } = require('@reactivex/rxjs');

class SlackBot {
  constructor(token) {
    this.client = new RtmClient(token);
  }

  onMessage() {
    return Observable.create(subscriber => {
      this.client.on(REAL_TIME_EVENTS.MESSAGE, (message) => {
        subscriber.next(message);
      });
    });
  }

  start() {
    this.client.start();
  }

  sendMessage(message, channelId) {
    this.client.sendMessage(message, channelId);
  }
}

module.exports = SlackBot;