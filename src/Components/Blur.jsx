import styled from "@emotion/styled";

export const Blur = styled.div`
  position: fixed;
  backdrop-filter: blur(3px);
  inset: 0;
  z-index: ${(props) => props.$zIndex || 2};
`;
