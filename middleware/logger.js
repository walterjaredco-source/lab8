const logger = (req, res, next) => {
const timestamp = new Date().toISOString();
console.log(`[${timestamp}] ${req.method} ${req.url}`);
next(); // <-- IMPORTANT: always call next() or the request will hang
};

module.exports = logger;