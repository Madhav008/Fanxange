import redis from 'redis';
import { logWithInfo, logger } from './logger.js';

// Initialize Redis client
const redisClient = redis.createClient({
    host: '192.168.1.124',
    port: 6379,
});

redisClient.on('connect', function () {
    console.log('Connected!');
    logWithInfo({ message: 'Redis Connected' });
});

redisClient.on('error', (err) => {
    console.error(err);
    logger.error({ message: err });
});

export { redisClient };
