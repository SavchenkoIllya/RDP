import { useLocation } from "react-router-dom";
import { usePages } from "@pages/hooks/usePages";
import { PageLink } from "./PageLink";

export const PageList = () => {
  const pages = usePages();
  const location = useLocation();

  return (
    <>
      {pages.map((page, idx) => {
        return (
          page.inHeader && (
            <li key={idx}>
              <PageLink
                to={page.link}
                className={location.pathname === page.path ? "active" : ""}
              >
                {page.name}
              </PageLink>
            </li>
          )
        );
      })}
    </>
  );
};
