const Constants = require('./Constants');
const LanguageApi = require('@google-cloud/language');
const { Observable } = require('@reactivex/rxjs');
const Sentiment = require('./Sentiment');

class SentimentAnalyzer {
  constructor() {
    this.client = new LanguageApi.LanguageServiceClient();    
  }

  analyzeSentiment(text) {
    const document = this.createDocument(text);
    const analyzeSentimentPromise = this.client
      .analyzeSentiment({document: document});

    return Observable.fromPromise(analyzeSentimentPromise)
      .map(sentiment => this.parseSentiment(sentiment));
  }

  createDocument(text) {
    return {
      content: text,
      type: Constants.DOCUMENT_TYPE,
    };
  }

  parseSentiment(sentiment) {
    const result = sentiment[0];
    return result.documentSentiment.score >= Constants.NEUTRAL_SCORE ? Sentiment.POSITIVE : Sentiment.NEGATIVE;
  }
}

module.exports = SentimentAnalyzer;