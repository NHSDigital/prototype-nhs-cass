const getTitleFromUrl = require('./data/title-url-map.js');

module.exports = (config) => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  
  const match = getTitleFromUrl(req.url)

  if (match) {
    res.locals.currentPageTitle = match.title
    res.locals.previousPageTitle = match.parentTitle
  }

  next();
};