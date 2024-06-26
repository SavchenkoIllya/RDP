import { useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { currentLanguage } from "@locales/i18n";

import {
  Header,
  Wrapper,
  CustomPagination,
  Spiner,
  ErrorMessage,
  Card,
  Heading,
} from "../../Components";

import { baseUrl } from "@utils/constants";
import { usePosts } from "./hooks/usePosts";

import styled from "@emotion/styled";
import defaultPic from "@assets/default.webp";
import { sizes } from "@styles/media";

export const Posts = () => {
  const location = useLocation();
  const scrollPostId = location.state || null;
  const cardRefs = useRef([]);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { page } = useParams();
  const currentLng = currentLanguage();
  const { posts, totalPages, status, error } = usePosts();
  useEffect(() => {
    cardRefs.current
      .find((cardRef) => cardRef.id === +scrollPostId)
      ?.cardRef.current.scrollIntoView();
  }, [scrollPostId]);

  const pageChange = (selectedPage) => {
    navigate(`/${Number(selectedPage.selected) + 1}`);
  };

  return (
    <>
      <Helmet>
        <title itemProp="name" lang={currentLng}>
          Радикальня | {t("pages.posts")}
        </title>
        <meta property="og:type" content="about" />
        <meta property="og:image" content={baseUrl + defaultPic} />
        <meta property="og:image:secure_url" content={baseUrl + defaultPic} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Radical logo" />
      </Helmet>

      <Header />
      <PlumsWrapper>
        {!!posts.length && (
          <>
            <ContentWrapper>
              <PageHeading>{t("drops")}</PageHeading>
              <PlumsCards>
                {posts.map((sliv, idx) => {
                  const {
                    attributes: { title, description, cover },
                    id,
                  } = sliv;

                  return (
                    <Card
                      ref={(el) => (cardRefs.current[idx - 1] = el)}
                      key={idx}
                      title={title}
                      description={description}
                      pictureUrl={
                        cover.data
                          ? baseUrl + cover.data.attributes.url
                          : defaultPic
                      }
                      id={id}
                    />
                  );
                })}
              </PlumsCards>
            </ContentWrapper>
            <CustomPagination
              page={page}
              totalPages={totalPages}
              onPageChange={pageChange}
            />
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {status === "loading" && <Spiner />}
      </PlumsWrapper>
    </>
  );
};

const PlumsCards = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  margin-bottom: 5rem;
  gap: 4rem;
  flex-wrap: wrap;
`;

const PageHeading = styled(Heading)`
  padding-top: 6rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const PlumsWrapper = styled(Wrapper)`
  max-width: ${sizes.large}px;
  margin: 0 auto;
`;
