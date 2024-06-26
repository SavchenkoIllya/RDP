import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyleConstants } from "@styles/variables";

export const PageLink = styled(Link)`
  padding: 1rem;
  background: none;
  border: none;
  font-weight: 400;
  text-decoration: none;
  color: ${StyleConstants.COLORS.WHITE};
  transition: all ${StyleConstants.FAST_ANIMATION}s;

  &:hover {
    color: ${StyleConstants.COLORS.RED};
  }

  &.active {
    font-weight: 700;
  }
`;
