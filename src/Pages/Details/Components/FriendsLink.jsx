import React from "react";
import { A } from "../../../Components/A";
import { baseUrl } from "../../../utils/constants";
import { useTranslation } from "react-i18next";

export const FriendsLink = ({ linkPath }) => {
  const { t } = useTranslation();

  return (
    <A href={baseUrl + linkPath} target="_blank" rel="noreferrer">
      <b>{t("details.documentButton")}</b>
    </A>
  );
};
