import fetch from "node-fetch";

const baseUrl = `http://www.omdbapi.com/`;

/**
 *
 * @param {object} params
 * @param {string} params.i omdbId of the movie
 * @param {string} params.t title of the movie
 * @param {string} params.type @example movie, series, episode
 * @param {number} params.y year of release
 * @param {string} params.plot @example short, full @default short
 * @param {string} params.r @example json, xml @default json
 *
 */
export const fetchById = async (params = {}) => {
  try {
    if (!params.i && !params.t) {
      throw Error("Request params should have at least id (i) or title (t)");
    }

    const url = `${baseUrl}?${queryParams(params)}`;
    const result = await fetch(url);
    const movie = await result.json();
    return movie;
  } catch (err) {
    console.error("Error ocurred fetching by ID", err);
    return null;
  }
};

/**
 *
 * @param {object} params
 * @param {string} params.s search query
 * @param {string} params.type @example movie, series, episode
 * @param {number} params.y year of release
 * @param {string} params.r @example short, full @default short
 * @param {string} params.page @example 1-100 @default 1
 *
 */
export const fetchBySearch = async (params = {}) => {
  try {
    if (!params.s) {
      throw Error("Request params should have at least id (i) or title (t)");
    }

    const url = `${baseUrl}?${queryParams(params)}`;
    const result = await fetch(url);
    const movie = await result.json();
    return movie;
  } catch (err) {
    console.error("Error ocurred fetching by Search", err);
    return null;
  }
};

function queryParams(params) {
  const API_KEY = process.env.OMDB_API_KEY;
  params = { ...params, apiKey: API_KEY };
  return Object.keys(params)
    .filter(key => !!params[key])
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}
