import styled from "@emotion/styled";
import { Wrapper } from "./Wrapper";
import img from "@assets/bg.webp";

export const WrapperWithImage = styled(Wrapper)`
  display: block;
  background: url(${img}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
