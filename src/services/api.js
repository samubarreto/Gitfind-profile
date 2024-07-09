export const BASE_URL = 'https://api.github.com/users/';
const TOKEN = ''; // <- PLEASE INSERT YOUR TOKEN HERE (https://github.com/settings/tokens) <- easy to get 🤠

export function getUserByUsername(searchedUsername) {
  if (TOKEN) {
    return fetch(`${BASE_URL}${searchedUsername}`, {
      headers: {
        'Authorization': `token ${TOKEN}`
      }
    });
  } else {
    return fetch(`${BASE_URL}${searchedUsername}`);
  }
}

export function getReposByUsername(searchedUsername) {
  if (TOKEN) {
    return fetch(`${BASE_URL}${searchedUsername}/repos`, {
      headers: {
        'Authorization': `token ${TOKEN}`
      }
    });
  } else {
    return fetch(`${BASE_URL}${searchedUsername}/repos`);
  }
}