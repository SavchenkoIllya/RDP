import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { currentLanguage } from "@locales/i18n";
import { setPage, setLoading, fetchPosts } from "@slices/postsSlice";

export const usePosts = () => {
  const { page } = useParams();
  const { totalPages, posts, status, error, currentPage, locale } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLng = currentLanguage();

  const request = () => {
    dispatch(setLoading());
    dispatch(fetchPosts(page));
    dispatch(setPage(page));
  };

  useLayoutEffect(() => {
    if (locale !== currentLng || page !== currentPage || !posts.length) {
      request();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, i18n.language]);

  return { totalPages, posts, status, error };
};
