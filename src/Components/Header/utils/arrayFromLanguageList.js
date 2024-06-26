/*
 * Give object of resources from i18n.options.resources
 * and function returns you array of all languages
 */
export const arrayFromLanguageList = (
  languageResources
) => {
  let languagesArray = [];
  for (let language in languageResources) {
    languagesArray.push(language);
  }
  return languagesArray;
};
