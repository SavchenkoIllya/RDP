import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Mixins, StyleConstants } from "@styles/variables";
import { arrayFromLanguageList } from "./utils/arrayFromLanguageList";
import { IoMdArrowBack } from "react-icons/io";
import { IconWrapper } from "../IconWrapper";
import { ModalContentWrapper, ModalFullScreenWrapper } from "../Modal/Modal";
import { media } from "@styles/media";
import { currentLanguage } from "@locales/i18n";

export const LanguageList = ({ toggle, children, ...props }) => {
  const { t, i18n } = useTranslation();
  const languageList = arrayFromLanguageList(i18n?.options.resources);
  const currentLng = currentLanguage();

  const handleLanguageChanger = (e, language) => {
    i18n.changeLanguage(language);
    toggle?.(e);
  };

  return (
    <LanguageWrapper onClick={toggle}>
      <LanguageSelector {...props} onClick={(e) => e.stopPropagation()}>
        <BackItem>
          <IconWrapper onClick={toggle}>
            <IoMdArrowBack size={15} />
          </IconWrapper>
          <span>{t(`languages.current`)}</span>
        </BackItem>
        {languageList.map((language, idx) => {
          return (
            <StyledListItem key={idx}>
              <LanguageItem
                disabled={currentLng === language ? true : false}
                onClick={(e) => handleLanguageChanger(e, language)}
              >
                {t(`languages.${language}`)}
              </LanguageItem>
            </StyledListItem>
          );
        })}
      </LanguageSelector>
    </LanguageWrapper>
  );
};

const LanguageWrapper = styled(ModalFullScreenWrapper)`
  z-index: 11;
`;

const LanguageSelector = styled(ModalContentWrapper)`
  background-color: ${StyleConstants.COLORS.LIGHT_DARK};
  position: absolute;
  overflow: auto;
  top: 0;
  right: 0;
  margin: 4.8rem 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 12;
  gap: 0.5rem;

  ${media.small} {
    margin-right: 0.5rem;
  }
`;

const StyledListItem = styled.li`
  width: 100%;
`;

const LanguageItem = styled.button`
  color: ${StyleConstants.COLORS.WHITE};
  padding: 1rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  background-color: transparent;
  transition: background-color ${StyleConstants.VERY_FAST_ANIMATION};

  &[disabled] {
    font-weight: 700;
  }

  &:hover {
    background-color: ${StyleConstants.COLORS.BLACK};
    cursor: pointer;
  }

  &:hover {
    &[disabled] {
      cursor: auto;
      background-color: transparent;
    }
  }
`;

const BackItem = styled(LanguageItem)`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;
  cursor: auto;

  &::after {
    ${Mixins.LINE}
  }

  &:hover {
    background-color: ${StyleConstants.COLORS.BLACK};
  }
`;
