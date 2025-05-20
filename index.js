const log = {
  success: (msg) => console.log(`✅ ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`),
  warn: (msg) => console.warn(`⚠️ ${msg}`),
  info: (msg) => console.info(`ℹ️ ${msg}`)
};

module.exports = log;
