/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { isVideo } from "../utils/isVideo";
import defaultPic from "@assets/default.webp";
import { baseUrl } from "@utils/constants";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styled from "@emotion/styled";
import { media } from "@styles/media";
import { StyleConstants } from "@styles/variables";
import { P } from "@components/P";

export const Preview = ({ current, items, currentSetter }) => {
  const { t } = useTranslation();
  const pictures = items.filter((el) => !isVideo(el.attributes.ext));
  const videos = items.filter((el) => isVideo(el.attributes.ext));
  const toRender = [...videos, ...pictures];
  let scrollPosition = useRef(0);

  const scroll = useRef();
  const { width } = useWindowDimensions();

  const saveScrollPosition = (e) => {
    width > 1255
      ? (scrollPosition = e.target.scrollTop)
      : (scrollPosition = e.target.scrollLeft);
  };

  function itemSetter(id) {
    let chosenItem = items.filter((el) => el.id === id);
    currentSetter(chosenItem);
  }

  useEffect(() => {
    width > 1255
      ? (scroll.scrollTop = scrollPosition)
      : (scroll.scrollLeft = scrollPosition);
  }, []);

  return (
    <CarouselPreviewsWrapper ref={scroll} onScroll={saveScrollPosition}>
      {toRender?.map((el, idx) => {
        if (isVideo(el?.attributes.ext)) {
          return (
            <AllPictures key={idx} onClick={() => itemSetter(el.id)}>
              <CoverId> {t("carousel.video") + " " + el.id}</CoverId>
              <PictureBlur
                style={
                  el.id === current.id
                    ? { border: `2px solid ${StyleConstants.COLORS.RED}` }
                    : null
                }
              ></PictureBlur>
              <img src={defaultPic}></img>
            </AllPictures>
          );
        }

        if (!isVideo(el?.attributes.ext)) {
          return (
            <AllPictures key={idx} onClick={() => itemSetter(el.id)}>
              <img
                style={
                  el.id === current.id
                    ? { border: `2px solid ${StyleConstants.COLORS.RED}` }
                    : null
                }
                src={baseUrl + el.attributes.url}
              ></img>
            </AllPictures>
          );
        }
      })}
    </CarouselPreviewsWrapper>
  );
};

const CarouselPreviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 60vh;
  width: 250px;

  ${media.medium} {
    flex-direction: row;
    width: 87%;
    overflow-y: hidden;
    overflow-x: scroll;

    img {
      width: 200px;
    }
  }
`;

const CoverId = styled(P)`
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const PictureBlur = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
`;

const AllPictures = styled.div`
  position: relative;

  img {
    height: 112.5px;
    width: 100%;
    object-fit: cover;
    border: 2px, solid, transparent;

    &:hover {
      cursor: pointer;
    }
  }

  ${media.medium} {
    img {
      width: 200px;
    }
  }
`;
