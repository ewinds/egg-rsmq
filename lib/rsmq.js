'use strict';

const RedisSMQ = require('rsmq');

module.exports = app => {
  const rsmq = new RedisSMQ({
    host: app.config.rsmq.host,
    port: app.config.rsmq.port,
    ns: 'rsmq',
  });

  return rsmq;
};
