/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { isMobile } from "react-device-detect";

import { isVideo } from "../utils/isVideo";
import defaultPic from "@assets/default.webp";
import { baseUrl } from "@utils/constants";
import {
  ModalCarousel,
  NextArrow,
  PreviousArrow,
} from "../Modal/ModalCarousel";
import deepEqual from "../utils/deepEqual";
import { IconButton } from "../IconButton";
import styled from "@emotion/styled";

export const Current = ({ data, carouselContent, setCurrent }) => {
  const pictures = carouselContent.filter((el) =>
    !isVideo(el.attributes.ext) ? el : false
  );
  const [isOpenedModal, setOpenedModal] = useState(false);
  let touchStart = useRef(null);
  let touchEnd = useRef(null);
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    touchEnd = null;
    // otherwise the swipe is fired even with usual touch events
    touchStart = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => (touchEnd = e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? setPrevious() : setNext();
  };

  const setPrevious = () => {
    let chosenContent = carouselContent.findIndex((i) => deepEqual(i, ...data));

    if (isOpenedModal) {
      let chosenPicture = pictures.findIndex((i) => deepEqual(i, ...data));
      chosenPicture === 0
        ? setCurrent([pictures[pictures.length - 1]])
        : setCurrent([pictures[chosenPicture - 1]]);
    } else {
      chosenContent === 0
        ? setCurrent([carouselContent[carouselContent.length - 1]])
        : setCurrent([carouselContent[chosenContent - 1]]);
    }
  };

  const setNext = () => {
    let chosenContent = carouselContent.findIndex((i) => deepEqual(i, ...data));
    if (isOpenedModal) {
      let chosenPicture = pictures.findIndex((i) => deepEqual(i, ...data));
      chosenPicture === pictures.length - 1
        ? setCurrent([pictures[0]])
        : setCurrent([pictures[chosenPicture + 1]]);
    } else {
      chosenContent === carouselContent.length - 1
        ? setCurrent([carouselContent[0]])
        : setCurrent([carouselContent[chosenContent + 1]]);
    }
  };

  const keyboardController = (e) => {
    if (e.keyCode === 37) {
      e.preventDefault();
      setPrevious();
    }
    if (e.keyCode === 39) {
      e.preventDefault();
      setNext();
    }
  };

  const handleModalOpen = (e) => {
    e.preventDefault();
    setOpenedModal(true);
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setOpenedModal(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyboardController);

    return () => {
      document.removeEventListener("keydown", keyboardController);
    };
  }, [keyboardController]);

  if (data.length <= 0) {
    return null;
  }

  return (
    <CurrentWrapper>
      {isOpenedModal && (
        <ModalCarousel
          data={data}
          handleModalClose={handleModalClose}
          next={setNext}
          previous={setPrevious}
        />
      )}

      {isMobile || carouselContent.length === 1 ? null : (
        <PreviousArrow>
          <IconButton onClick={setPrevious}>{""}</IconButton>
        </PreviousArrow>
      )}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ width: "inherit" }}
      >
        {isVideo(data[0].attributes.ext) ? (
          <ReactPlayer
            key={data[0].id}
            url={baseUrl + data[0].attributes.url}
            controls
            autoPlay={false}
            light={defaultPic}
            playsinline={true}
            muted
            loop
            width={"inherit"}
            height={"60vh"}
          />
        ) : (
          <>
            <CurrentImg
              onClick={handleModalOpen}
              key={data[0].id}
              src={baseUrl + data[0].attributes.url}
            />
          </>
        )}
      </div>
      {isMobile || carouselContent.length === 1 ? null : (
        <NextArrow>
          <IconButton onClick={setNext}>{""}</IconButton>
        </NextArrow>
      )}
    </CurrentWrapper>
  );
};

const CurrentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  font-weight: bold;
`;

const CurrentImg = styled.img`
  display: inline;
  width: inherit;
  height: 60vh;
  object-fit: contain;
`;
