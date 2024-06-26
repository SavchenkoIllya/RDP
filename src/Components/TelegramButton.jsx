import { useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "./Button";
import { useSelector } from "react-redux";

export const TelegramButton = ({ dataOnauth, botId, children }) => {
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?21";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleTelegramAuth = () => {
    return window.Telegram.Login.auth(
      { bot_id: botId, request_access: "read" },
      (data) => {dataOnauth(data)}
    );
  };

  return (
    <StyledTelegramButtonWrapper>
      <Button as="button" onClick={handleTelegramAuth}>
        {children}
      </Button>
      {!!error && <p>{error}</p>}
    </StyledTelegramButtonWrapper>
  );
};

const StyledTelegramButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
