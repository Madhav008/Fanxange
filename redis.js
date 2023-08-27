// redis.js
const redis = require('redis');

// Initialize Redis client
const redisClient = redis.createClient({
  host: 'localhost', // Replace with your Redis server host
  port: 6379,        // Replace with your Redis server port
});

redisClient.connect();

module.exports = redisClient;
