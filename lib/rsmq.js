'use strict';

const RedisSMQ = require('rsmq');

module.exports = app => {
  const rsmq = new RedisSMQ({ client: app.redis, ns: 'rsmq' });

  return rsmq;
};
