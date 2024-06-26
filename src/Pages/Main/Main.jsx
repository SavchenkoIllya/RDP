// main libraries
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { currentLanguage } from "@locales/i18n";

import {
  WrapperWithImage,
  Button,
  TelegramButton,
  Header,
  Blur,
} from "@components/";

import { baseUrl, botId } from "@utils/constants";
import { useLogin } from "./hooks/useLogin";

import styled from "@emotion/styled";
import { media } from "@styles/media";
import Logo from "@assets/logo-main.svg";
import defaultPic from "@assets/default.webp";

// This page shouldn't redirect, even though that's better for UX (client's will)

export const Main = () => {
  const { t } = useTranslation();
  const { token, logInTelegram } = useLogin();
  const currentLng = currentLanguage();

  return (
    <>
      <Helmet>
        <title itemProp="name" lang={currentLng}>
          Радикальня | {t("pages.main")}
        </title>
        <meta property="og:image" content={baseUrl + defaultPic} />
        <meta property="og:image:secure_url" content={baseUrl + defaultPic} />
        <meta property="og:type" content="about" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Radical logo" />
      </Helmet>

      <Header />
      <MainPageWrapper>
        <Blur />
        <ContentWrapper>
          <LogoImg src={Logo} alt="Radikalnya logo" />
          {token ? (
            <>
              <nav>
                <ul>
                  <li>
                    <Button link="/about">{t("pages.about")}</Button>
                  </li>
                  <li>
                    <Button link="/1">{t("pages.posts")}</Button>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <TelegramButton botId={botId} dataOnauth={logInTelegram}>
              {t("main.tgButton")}
            </TelegramButton>
          )}
        </ContentWrapper>
      </MainPageWrapper>
    </>
  );
};

const LogoImg = styled.img`
  display: block;
  max-height: 350px;
  margin: auto;
  padding: 1rem;
  object-fit: cover;

  ${media.small} {
    max-height: 300px;
  }
`;

const MainPageWrapper = styled(WrapperWithImage)`
  display: flex;

  nav {
    ul {
      margin: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;

      li {
        list-style: none;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: 4;
`;
