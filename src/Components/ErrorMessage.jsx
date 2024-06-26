import styled from "@emotion/styled";
import { Heading } from "./Heading";
import { P } from "./P";

export const ErrorMessage = ({ children, props }) => {
  return (
    <StyledErrorMessage {...props}>
      <Heading>No content loaded</Heading>
      <P>{children}</P>
    </StyledErrorMessage>
  );
};

const StyledErrorMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
