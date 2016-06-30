export function searchUser(searchTerm) {
  return fetch(`https://api.github.com/search/users?q=${searchTerm}+type:user`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response ${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json());
}


export function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response ${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json());
}
