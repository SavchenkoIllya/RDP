import styled from "@emotion/styled";
import { useState } from "react";

export const LoadableImg = ({ src, fallback, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledImg
      onLoad={() => setLoaded(true)}
      src={loaded ? src : fallback}
      {...props}
    />
  );
};

const StyledImg = styled.img`
  width: inherit;
  object-fit: cover;
  height: 250px;
  border-radius: 10px 10px 0 0;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-color: #e5e7eb;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
