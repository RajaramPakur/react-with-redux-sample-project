import {
  TOP_NEWS,
  SEARCH_NEWS,
  NEWS_SOURCES,
  SEARCH_BY_SOURCES,
} from "../constants/actionTypes";

export const fetchAllNews = (country) => (dispatch) => {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=a78e73c6432c44a395e6f4c7771ab6f3`
  )
    .then((res) => res.json())
    .then((news) =>
      dispatch({
        type: TOP_NEWS,
        payload: news,
      })
    );
};

export const fetchAllNewsSources = () => (dispatch) => {
  fetch(
    "https://newsapi.org/v2/sources?apiKey=a78e73c6432c44a395e6f4c7771ab6f3"
  )
    .then((res) => res.json())
    .then((sources) =>
      dispatch({
        type: NEWS_SOURCES,
        payload: sources,
      })
    );
};

export const searchFromTopNews = (query) => (dispatch) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=a78e73c6432c44a395e6f4c7771ab6f3`
  )
    .then((res) => res.json())
    .then((news) =>
      dispatch({
        type: SEARCH_NEWS,
        payload: news,
      })
    );
};

export const searchAllNewsByDomain = (domains) => (dispatch) => {
  fetch(
    `https://newsapi.org/v2/everything?domains=${domains}&apiKey=a78e73c6432c44a395e6f4c7771ab6f3`
  )
    .then((res) => res.json())
    .then((news) =>
      dispatch({
        type: SEARCH_BY_SOURCES,
        payload: news,
      })
    );
};
