import styled from "styled-components";
import { StyleConstants } from "@styles/variables";

export const A = styled.a`
  text-decoration: none;
  color: ${StyleConstants.COLORS.RED};
  transition: color ${StyleConstants.FAST_ANIMATION}s;

  &:hover {
    color: ${StyleConstants.COLORS.RED_OPACITY};
  }
`;
