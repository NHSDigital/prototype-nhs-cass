const titleUrlMap = {
  "cohort-explorer/landing": "Cohorting as a Service (CaaS)",
  "cohort-explorer/cohort-library": "Cohort library",
};

module.exports = (url) => {
  return titleUrlMap[Object.keys(titleUrlMap).find((key) => url.endsWith(key))];
}