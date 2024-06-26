import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { currentLanguage } from "@locales/i18n";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

import {
  Header,
  Heading,
  Footer,
  Wrapper,
  BackButton,
  Spiner,
  ErrorMessage,
} from "@components/index.js";
import { FriendsLink } from "./Components/FriendsLink";
import { Carousel } from "./Components/Carousel/Carousel";

import { baseUrl } from "@utils/constants";
import { fetchPost, setLoading } from "@slices/postSlice";

import styled from "@emotion/styled";
import { media, sizes } from "@styles/media";
import defaultPic from "@assets/default.webp";

export const Details = () => {
  const { t } = useTranslation();
  const { postId, page } = useParams();
  const navigate = useNavigate();
  const { post, status, error, linkId } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const currentLng = currentLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (linkId !== postId || !Object.keys(post).length) {
      dispatch(setLoading());
      dispatch(fetchPost(postId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <DetailsWrapper className={status === "loading" || error ? "empty" : ""}>
        <DetailsBackButton
          onClick={() => navigate(`/${page}`, { state: postId })}
        />
        <ContentWrapper
          className={status === "loading" || error ? "empty" : ""}
        >
          {status === "loading" && <Spiner />}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {!!Object.keys(post).length && (
            <>
              <DetailsHeading>{post.title}</DetailsHeading>
              <Carousel post={post} />
              <TextDetails>
                <ReactMarkdown children={post.description} />
                {!!post.friend_list.data && (
                  <>
                    <LinksHeading>{t("details.links")}</LinksHeading>
                    <FriendsLink
                      linkPath={post.friend_list.data.attributes.url}
                    />
                  </>
                )}
              </TextDetails>
            </>
          )}
        </ContentWrapper>
      </DetailsWrapper>
      <Footer />
    </>
  );
};

const DetailsHeading = styled(Heading)`
  font-size: 2rem;
  margin: 1rem 0;
`;

const LinksHeading = styled(Heading)`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const DetailsBackButton = styled(BackButton)`
  align-self: flex-start;
`;

const TextDetails = styled.div`
  padding: 2rem 0;
  border-radius: 10px;
  margin-bottom: 4rem;
  max-width: 79vw;

  p {
    line-height: 21px;
  }

  ${media.small} {
    margin: 0;
    padding: 2rem 1rem;
  }
`;

const DetailsWrapper = styled(Wrapper)`
  max-width: ${sizes.large}px;
  margin: auto;
  padding: 8rem 4rem 2rem 4rem;
  display: block;

  &.empty {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
  }

  ${media.small} {
    padding: 8rem 1rem 0 1rem;
  }
`;

const ContentWrapper = styled.section`
  &.empty {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
