require('dotenv').config()

const SentimentBot = require('./src/SentimentBot');

const sentimentBot = new SentimentBot();
sentimentBot.run();
