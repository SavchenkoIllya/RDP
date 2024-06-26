// main libraries
import { Helmet } from "react-helmet-async";
import { currentLanguage } from "@locales/i18n";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

import {
  Spiner,
  Heading,
  Header,
  Blur,
  Button,
  WrapperWithImage,
} from "@components/";

import { useAbout } from "./hooks/useAbout";

import styled from "@emotion/styled";
import { media } from "@styles/media";
import fullLogo from "@assets/logo-main.svg";

export const About = () => {
  const { description, status } = useAbout();
  const { t } = useTranslation();
  const currentLng = currentLanguage();
  return (
    <>
      <Helmet>
        <title itemProp="name" lang={currentLng}>
          Радикальня | {t("pages.about")}
        </title>
        <meta
          name="og:description"
          content={description.slice(0, 150) + "..."}
        />
        <meta property="og:type" content="about" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Radical logo" />
      </Helmet>

      <Header />
      <WrapperWithImage>
        <Blur />
        <Content>
          <ContentBg>
            <AboutContent>
              {status === "loading" && <Spiner />}
              {description && (
                <>
                  <Logo src={fullLogo} alt="big-logo" />
                  <TextContent>
                    <Heading>{t("about.title")}</Heading>
                    <ReactMarkdown children={description} />
                    <Heading id="contacts">{t("about.connectAdmin")}</Heading>
                    <Buttons>
                      <Button
                        link={"https://t.me/Oleg_Rachko"}
                        isExternal={true}
                      >
                        {t("about.button")}
                      </Button>
                    </Buttons>
                  </TextContent>
                </>
              )}
            </AboutContent>
          </ContentBg>
        </Content>
      </WrapperWithImage>
    </>
  );
};

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  z-index: 5;
`;

const ContentBg = styled.div`
  width: 60%;
  min-height: 100vh;
  background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.medium} {
    width: 100%;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 5rem 0;

  h1 {
    margin-top: 0;
    font-weight: 900;
    padding: 0;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    max-width: 500px;
    margin: 1rem 0;
    text-align: justify;
  }
`;

const Logo = styled.img`
  max-width: 500px;
  height: fit-content;
  ${media.medium} {
    padding: 1rem;
  }
`;

const TextContent = styled.div`
  padding: 2rem;
`;

const Buttons = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
