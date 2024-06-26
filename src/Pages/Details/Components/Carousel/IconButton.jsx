import styled from "@emotion/styled";
import { StyleConstants } from "../../../../styles/variables";

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${StyleConstants.COLORS.WHITE};

  &:hover {
    cursor: pointer;
  }
`;
