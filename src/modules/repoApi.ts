import axios, { AxiosResponse } from 'axios';

let url = 'https://api.github.com/users/INIRU/repos';

function repoApi(): Promise<AxiosResponse<any>> {
  return axios({
    url: url,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_GIT_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
}

export default repoApi;
