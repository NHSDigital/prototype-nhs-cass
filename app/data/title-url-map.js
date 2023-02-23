// Add page H1 titles and their file path below, nothing really else needs to be touched,
// the logic will return whether or not a title exists for a page or not, if it does it will
// return a title for the page in the go back link dynamically

// locals.js also includes logic pulling from the map below

const titleUrlMap = {

  // Top-level pages

  "cohort-explorer/landing": {
    title:"Cohorting as a Service (CaaS)",
    parentPath: ""
  },
  "cohort-explorer/cohort-library": {
    title:"Cohort library",
    parentPath: "cohort-explorer/landing"
  },
  "cohort-explorer/condition-group-library": {
    title:"Condition group library",
    parentPath: "cohort-explorer/landing"
  },
  "cohort-explorer/data-integration-library": {
    title:"Data integration library",
    parentPath: "cohort-explorer/landing"
  },
  "cohort-explorer/support": {
    title:"Support",
    parentPath: "cohort-explorer/landing"
  },

  // Influenza Cohort

  "cohort-explorer/influenza-winter-22-23/influenza-cohort": {
    title:"Influenza vaccinations 2022 to 2023: Cohort identification methodology",
    parentPath: "cohort-explorer/cohort-library"
  },

  // Influenza Cohort Condition Groups - Chronic Heart Disease

  "cohort-explorer/influenza-winter-22-23/condition-groups/chronic-heart-disease": {
    title:"Chronic heart disease",
    parentPath: "cohort-explorer/influenza-winter-22-23/influenza-cohort"
  },
  
  // Influenza Cohort Condition Groups - Chronic Kidney Disease

  "cohort-explorer/influenza-winter-22-23/condition-groups/chronic-kidney-disease": {
    title:"Chronic kidney disease",
    parentPath: "cohort-explorer/influenza-winter-22-23/influenza-cohort"
  },

  // Influenza Cohort Condition Groups - Chronic Liver Disease

  "cohort-explorer/influenza-winter-22-23/condition-groups/chronic-liver-disease": {
    title:"Chronic liver disease",
    parentPath: "cohort-explorer/influenza-winter-22-23/influenza-cohort"
  },

  // Influenza Cohort Condition Groups - Chronic Neurological Disease

  "cohort-explorer/influenza-winter-22-23/condition-groups/chronic-neurological-disease": {
    title:"Chronic neurological disease",
    parentPath: "cohort-explorer/influenza-winter-22-23/influenza-cohort"
  },

  // Influenza Cohort Condition Groups - Chronic Respiratory Disease

  "cohort-explorer/influenza-winter-22-23/condition-groups/chronic-respiratory-disease": {
    title:"Chronic respiratory disease",
    parentPath: "cohort-explorer/influenza-winter-22-23/influenza-cohort"
  },
  
  // Influenza Cohort Condition Groups - Clinically Coded Eligibility

  "cohort-explorer/influenza-winter-22-23/condition-groups/clinically-coded-eligibility": {
    title:"Clinically coded eligibility",
    parentPath: "cohort-explorer/influenza-winter-22-23/influenza-cohort"
  },
};

module.exports = (url) => {
  if (!url) {
    return
  }
  const match = titleUrlMap[Object.keys(titleUrlMap).find((key) => url.endsWith(key))];
  if (!match) {
    return
  }
  const parentTitle = titleUrlMap[match.parentPath] ? titleUrlMap[match.parentPath].title : "";
  return {
    title: match.title,
    parentTitle
  };
}