import monobank from "@assets/icons/monobank.svg";
import paypal from "@assets/icons/paypal.svg";
import bitcoin from "@assets/icons/bitcoin.svg";
import usdt from "@assets/icons/usdt.svg";
import styled from "@emotion/styled";

export const Icons = ({ walletName, iconsSize = "30px" }) => {
  let wallet = walletName.toLowerCase();
  switch (wallet) {
    case "mono" || "monobank":
      return (
        <StyledIcon
          $iconSize={iconsSize}
          alt={"monobank logo"}
          src={monobank}
        />
      );
    case "paypal":
      return (
        <StyledIcon $iconSize={iconsSize} alt={"paypal logo"} src={paypal} />
      );
    case "bitcoin":
      return (
        <StyledIcon $iconSize={iconsSize} alt={"bitcoin logo"} src={bitcoin} />
      );
    case "usdt":
      return <StyledIcon $iconSize={iconsSize} alt={"usdt logo"} src={usdt} />;
    default:
      break;
  }
};

const StyledIcon = styled.img`
  height: ${(props) => props.$iconSize};
  width: ${(props) => props.$iconSize};
`;
