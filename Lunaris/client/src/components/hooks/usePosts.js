import React, { useMemo } from "react";

// Хук для сортировки постов
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

// Хук для фильтрации и сортировки постов
export const usePosts = (posts = [], sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title && post.title.toLowerCase().includes(query.toLowerCase()) // Проверка на наличие title
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
