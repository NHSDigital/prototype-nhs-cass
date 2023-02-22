const titleUrlMap = {
  "cohort-explorer/landing": "Cohorting as a Service (CaaS)",
  "cohort-explorer/cohort-library": "Cohort library",
  "cohort-explorer/influenza-winter-22-23/influenza-cohort": "Influenza vaccinations 2022 to 2023: Cohort identification methodology",
};

module.exports = (url) => {
  return titleUrlMap[Object.keys(titleUrlMap).find((url) => url.endsWith(url))];
}