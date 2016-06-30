export function fetchReposService(user) {
  return fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response ${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json());
}
