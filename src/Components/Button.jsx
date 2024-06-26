import styled from "@emotion/styled";
import { Mixins } from "@styles/variables";
import { Link } from "react-router-dom";

export const Button = ({ children, link, isExternal, ...rest }) => {
  if (link) {
    return (
      <StyledLinkButton
        to={link}
        target={isExternal && "_blank"}
        rel={isExternal && "noreferrer"}
      >
        {children}
      </StyledLinkButton>
    );
  }

  if (!link) {
    return <StyledButton {...rest}>{children}</StyledButton>;
  }
};

export const StyledLinkButton = styled(Link)`
  ${Mixins.BUTTON}
`;

export const StyledButton = styled.button`
  ${Mixins.BUTTON}
`;
