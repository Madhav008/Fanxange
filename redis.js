const redis = require('redis')

// Initialize Redis client
const redisClient = redis.createClient({
  host: '192.168.1.124',
  port: 6379,
});

redisClient.on('connect', function () {
  console.log('Redis Connected!');
});

redisClient.on('error', (err) => {
  console.error(err);
});

module.exports = { redisClient };
