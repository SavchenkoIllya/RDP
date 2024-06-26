import styled from "@emotion/styled";
import { Icons } from "./Icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Mixins } from "@styles/variables";
import { Heading } from "@components/Heading";
import { P } from "@components/P";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWallets } from "@slices/walletsSlice";
import { sizes } from "@styles/media";

export const Footer = (props) => {
  const { wallets } = useSelector((state) => state.wallets);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!wallets.length) dispatch(fetchWallets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    wallets && (
      <StyledFooter {...props}>
        <ContentWrapper>
          <Heading>{t("details.payments")}</Heading>
          {wallets?.map((wallet, index) => {
            return (
              <WalletsWrapper key={index}>
                <IconWrapper>
                  <Icons walletName={wallet.attributes.name} />
                </IconWrapper>
                <AddressWrapper>{wallet.attributes.wallet_id}</AddressWrapper>
              </WalletsWrapper>
            );
          })}
        </ContentWrapper>
      </StyledFooter>
    )
  );
};

const ContentWrapper = styled.div`
  max-width: ${sizes.large}px;
  margin: auto;
`;

const StyledFooter = styled.footer`
  background-color: #121212;
  padding: 0 2rem 2rem 2rem;

  &::before {
    ${Mixins.LINE}
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const WalletsWrapper = styled.article`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const AddressWrapper = styled(P)`
  display: inline-block;
  overflow-wrap: anywhere;
`;
