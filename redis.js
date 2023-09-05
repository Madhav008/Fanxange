// redis.js
const redis = require('redis');

// Initialize Redis client
const redisClient = redis.createClient({
  host: '192.168.1.124', // Replace with your Redis server host
  port: 6379,        // Replace with your Redis server port
});

(async () => {
  await redisClient.connect();
})();

redisClient.on('connect', function () {
  console.log('Connected!');
});

redisClient.on('error', (err) => {
  console.error(err);
});
module.exports = redisClient;
