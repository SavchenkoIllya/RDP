import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import ru from "./ru/translation.json";
import ua from "./ua/translation.json";

export const translationsJson = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  ua: {
    translation: ua,
  },
};

/**
 * Using different devices users can get different formats of result of i18n.language function to prevent this use this function
 * @returns string with current language in format "en", "de", etc.
 */
export const currentLanguage = () => i18n.language.slice(0, 2).toLowerCase();

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ru",
  resources: translationsJson,
});

export default i18n;
