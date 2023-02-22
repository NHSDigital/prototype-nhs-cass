const getTitleFromUrl = require('./data/title-url-map.js');

module.exports = (config) => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  res.locals.previousPageTitle = getTitleFromUrl(req.headers.referer);
  res.locals.currentPageTitle = getTitleFromUrl(req.url);

  next();
};
