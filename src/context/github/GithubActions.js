import axios from "axios";

const GITHUB_URI = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URI,
  headers: `token ${GITHUB_TOKEN}`,
});

// search users
export const SearchUsers = async (text) => {
  const response = await github.get(`/search/users?q=${text}`);
  return response.data.items;
};

// get single user
export const GetUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
