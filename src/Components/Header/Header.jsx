import { useState } from "react";
import styled from "styled-components";
import { sizes, media } from "@styles/media";
import { LanguageList } from "./LanguageList";
import { useTranslation } from "react-i18next";
import { PageList } from "./PageList";
import { Burger } from "./Burger";
import { Mixins, StyleConstants } from "@styles/variables";
import { ModalContentWrapper, ModalFullScreenWrapper } from "../Modal/Modal";
import { A } from "../A";
import { AnimatePresence } from "framer-motion";
import logo from "@assets/logo-header.svg";
import { Logout } from "./Logout";
import { currentLanguage } from "@locales/i18n";
import { useDispatch } from "react-redux";
import { logout } from "@slices/userSlice";

export const Header = (props) => {
  const [isOpenedLanguage, setToggleLanguage] = useState(false);
  const [isOpenedMenuModal, setOpenedModal] = useState(false);
  const { t } = useTranslation();
  const currentLng = currentLanguage();
  const dispatch = useDispatch();

  const toggleLanguage = (e) => {
    e.preventDefault();
    if (isOpenedMenuModal) {
      setOpenedModal((prev) => !prev);
    }
    setToggleLanguage((prev) => !prev);
  };

  const toggleModal = (e) => {
    e.preventDefault();
    setOpenedModal((prev) => !prev);
  };

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <StyledHeader {...props}>
        <HeaderWrapper>
          <A href="/">
            <img src={logo} width={150} alt="Radical logo" />
          </A>
          <nav>
            <NavBarContent>
              <PageList />
              <li>
                <CurrentLanguage onClick={toggleLanguage}>
                  {currentLng.toUpperCase()}
                </CurrentLanguage>
              </li>
              <li>
                <Logout onClick={handleLogout} />
              </li>
            </NavBarContent>
            <Burger handle={toggleModal} />
          </nav>
        </HeaderWrapper>
      </StyledHeader>
      <AnimatePresence>
        {isOpenedMenuModal && (
          <ModalFullScreenWrapper
            initial={{ left: "100vw" }}
            animate={{ left: 0 }}
            exit={{ left: "100vw" }}
            onClick={toggleModal}
          >
            <MobileMenu onClick={(e) => e.stopPropagation()}>
              <nav>
                <MobileList>
                  <li>
                    <Burger handle={toggleModal} />
                  </li>
                  <PageList />
                  <li>
                    <CurrentLanguage onClick={toggleLanguage}>
                      {t("header.current")}: {currentLng.toUpperCase()}
                    </CurrentLanguage>
                  </li>
                  <li>
                    <Logout onClick={handleLogout} />
                  </li>
                </MobileList>
              </nav>
            </MobileMenu>
          </ModalFullScreenWrapper>
        )}
        {isOpenedLanguage && (
          <LanguageList
            key="languageList"
            initial={{ right: -500 }}
            animate={{ right: 0 }}
            exit={{ right: -500 }}
            transition={{ type: "tween" }}
            toggle={toggleLanguage}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 1rem 2rem 0 2rem;
  background-color: ${StyleConstants.COLORS.LIGHT_DARK};
  z-index: 11;

  &::after {
    ${Mixins.LINE}
  }
`;

const HeaderWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${sizes.large}px;
`;

const NavBarContent = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.small} {
    display: none;
  }
`;

const MobileMenu = styled(ModalContentWrapper)`
  background: ${StyleConstants.COLORS.LIGHT_DARK};
  border-radius: 0;
  display: none;
  height: 100vh;

  ${media.small} {
    position: absolute;
    min-width: 50vw;
    right: 0;
    top: 0;
    display: block;
    padding: 1rem;
  }
`;

const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const CurrentLanguage = styled(A)`
  background: none;
  border: none;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    color: ${StyleConstants.COLORS.RED};
  }
`;
