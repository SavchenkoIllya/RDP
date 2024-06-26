import { useTranslation } from "react-i18next";
import { Main } from "@pages/Main/Main";
import { About } from "@pages/About/About";
import { Posts } from "@pages/Posts/Posts";
import { Details } from "@pages/Details/Details";

export const usePages = () => {
  const { t } = useTranslation();

  return [
    {
      path: "*",
      element: <Main />,
      link: "/",
      isProtected: false,
      inHeader: true,
      name: t("pages.main"),
    },
    {
      path: "/about",
      link: "/about",
      element: <About />,
      isProtected: true,
      inHeader: true,
      name: t("pages.about"),
    },
    {
      path: ":page",
      link: `/${1}`,
      element: <Posts />,
      isProtected: true,
      inHeader: true,
      name: t("pages.posts"),
    },
    {
      path: "/:page/details/:postId",
      element: <Details />,
      isProtected: true,
      inHeader: false,
      name: t("pages.details"),
    },
  ];
};
