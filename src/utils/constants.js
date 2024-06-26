export const baseUrl = process.env.REACT_APP_URL;
export const token = process.env.REACT_APP_TOKEN;
export const botId = process.env.REACT_APP_BOT_ID;

export const headers = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};
