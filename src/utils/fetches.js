import axios from "axios";
import { baseUrl, headers } from "./constants";
import fileDownload from "js-file-download";
import { currentLanguage } from "@locales/i18n";

export const getAbout = () =>
  axios.get(`${baseUrl}/api/about?locale=${currentLanguage()}`, headers());

export const getPosts = (pageNumber = 1) =>
  axios.get(
    `${baseUrl}/api/posts?populate=cover&locale=${currentLanguage()}&sort[0]=createdAt:desc&pagination[page]=${pageNumber}`,
    headers()
  );

export const getPost = (postId) =>
  axios.get(
    `${baseUrl}/api/posts/${postId}?populate[0]=attachments&populate[1]=friend_list&populate[2]=cover&locale=${currentLanguage()}`,
    headers()
  );

export const getWallets = () => axios.get(`${baseUrl}/api/wallets`, headers());

export const tgAuth = (response) =>
  axios.post(`${baseUrl}/api/users-permissions/telegram`, response);

export const handleDownload = (url, filename) => {
  axios.get(url);
  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, filename);
    })
    .catch((err) => console.warn(err));
};


