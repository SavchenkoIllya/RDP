/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import { handleDownload } from "@utils/fetches";
import { isMobile } from "react-device-detect";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { baseUrl } from "@utils/constants";
import styled from "@emotion/styled";
import ModalImage from "./ModalImage";
import { ModalFullScreenWrapper } from "@components/Modal/Modal";
import { IconButton } from "../IconButton";
import { StyleConstants } from "@styles/variables";
import { DownloadIcon } from "./DownloadIcon";

export const ModalCarousel = ({
  handleModalClose,
  data,
  next,
  previous,
  ...props
}) => {
  let touchStart = useRef(null);
  let touchEnd = useRef(null);
  const previousButton = useRef(null);
  const nextButton = useRef(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    touchEnd = null; // otherwise the swipe is fired even with usual touch events
    e.type.includes("touch")
      ? (touchStart = e.touches[0].clientX)
      : (touchStart = e.clientX);
  };

  const onTouchMove = (e) => {
    e.type.includes("touch")
      ? (touchEnd = e.touches[0].clientX)
      : (touchEnd = e.clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? nextButton.current.click() : previousButton.current.click();
  };

  return (
    <ImgModalWrapper {...props} onClick={handleModalClose}>
      <Cross onClick={handleModalClose}>X</Cross>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <PreviousArrow
          style={
            isMobile ? { height: "0", width: "0", overflow: "hidden" } : {}
          }
        >
          <IconButton ref={previousButton} onClick={previous}>
            {""}
          </IconButton>
        </PreviousArrow>

        <PictureWrapper>
          <DownloadIcon
            onClick={() =>
              handleDownload(
                baseUrl + data[0].attributes.url,
                data[0].attributes.name
              )
            }
          >
            &#8595;
          </DownloadIcon>
          <TransformWrapper
            disablePadding={true}
            onPanning={({ state, instance }, event) => {
              if (state.scale === 1) onTouchMove(event);
              if (
                Math.ceil(state.positionX) ===
                  Math.ceil(instance.bounds.maxPositionX) ||
                (Math.ceil(state.positionX) ===
                  Math.ceil(instance.bounds.minPositionX) &&
                  state.scale >= 1.4)
              ) {
                onTouchMove(event);
              }
            }}
            onPanningStart={(_, event) => onTouchStart(event)}
            onPanningStop={onTouchEnd}
          >
            <TransformComponent>
              <ModalImage
                src={baseUrl + data[0].attributes.url}
                key={data[0].id}
              />
            </TransformComponent>
          </TransformWrapper>
        </PictureWrapper>

        <NextArrow
          style={
            isMobile ? { height: "0", width: "0", overflow: "hidden" } : {}
          }
        >
          <IconButton ref={nextButton} onClick={next}>
            {""}
          </IconButton>
        </NextArrow>
      </ContentWrapper>
    </ImgModalWrapper>
  );
};

const ImgModalWrapper = styled(ModalFullScreenWrapper)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  z-index: 11;
`;

const Cross = styled(IconButton)`
  position: absolute;
  top: 2vh;
  right: 2vw;
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 1rem;
`;

const PictureWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-height: 100vh;
  }
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  button {
    padding: 1rem;
    color: ${StyleConstants.COLORS.RED};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NextArrow = styled(Arrow)`
  button {
    border-color: ${StyleConstants.COLORS.RED};
    border-bottom: 6px solid;
    border-left: 6px solid;
    transform: rotate(-135deg);
    right: 10px;

    &:hover {
      border-color: ${StyleConstants.COLORS.RED_OPACITY};
    }
  }
`;
export const PreviousArrow = styled(Arrow)`
  button {
    border-color: ${StyleConstants.COLORS.RED};
    border-bottom: 6px solid;
    border-left: 6px solid;
    transform: rotate(45deg);
    left: 10px;

    &:hover {
      border-color: ${StyleConstants.COLORS.RED_OPACITY};
    }
  }
`;
