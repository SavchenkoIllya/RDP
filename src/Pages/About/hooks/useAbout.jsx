import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchAbout, setDescriptionLoading } from "@slices/aboutSlice";
import { currentLanguage } from "@locales/i18n";
import { useSelector, useDispatch } from "react-redux";

export const useAbout = () => {
  const { description, status, locale } = useSelector((state) => state.about);
  const { i18n } = useTranslation();
  const currentLng = currentLanguage();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!description.length || locale !== currentLng) {
      dispatch(setDescriptionLoading());
      dispatch(fetchAbout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return { description, status };
};
