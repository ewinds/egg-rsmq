"use strict";

const rsmq = require("./lib/rsmq");

module.exports = app => {
  app.rsmq = rsmq(app);
  app.coreLogger.info(`[egg-rsmq] is ready`);
};
