/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { isVideo } from "./utils/isVideo";
import { Current } from "./Current/Current";
import styled from "@emotion/styled";
import { Preview } from "./Preview/Preview";
import { media } from "@styles/media";

export const Carousel = ({ post }) => {
  const postToSort = structuredClone(post);
  const filteredMaterials = postToSort.attachments.data.sort((el) =>
    isVideo(el.attributes.ext) ? -1 : 0
  );
  const [current, setCurrent] = useState([filteredMaterials[0]]);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    setCarouselData(filteredMaterials);
  }, [current]);

  return (
    <CarouselWrapper>
      <Current
        data={current}
        carouselContent={carouselData}
        setCurrent={setCurrent}
      />
      <Preview
        current={current[0]}
        items={carouselData}
        currentSetter={setCurrent}
      />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 4rem;

  ${media.medium} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
