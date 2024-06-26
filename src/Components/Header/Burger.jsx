import styled from "styled-components";
import { media } from "@styles/media";
import { IoMdMenu } from "react-icons/io";
import { IconWrapper } from "../IconWrapper";

export const Burger = ({ handle, size = 25 }) => {
  return (
    <BurgerWrapper onClick={handle}>
      <IoMdMenu size={size} color="white" />
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled(IconWrapper)`
  display: none;
  ${media.small} {
    display: block;
  }
`;
