import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { StyleConstants } from "@styles/variables";

export const BackButton = ({...props}) => {
  const { t } = useTranslation();

  return (
    <StyledBackButton {...props}>
      <IoIosArrowBack size={"20px"} />
      <span>{t("details.button")}</span>
    </StyledBackButton>
  );
};

const StyledBackButton = styled.button`
  background: none;
  border: none;
  color: ${StyleConstants.COLORS.RED};
  display: flex;
  align-items: center;
  gap: 1rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    cursor: pointer;
  }

  span {
    :hover {
      cursor: pointer;
    }
  }
`;
