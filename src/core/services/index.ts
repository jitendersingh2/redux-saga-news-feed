interface postsResponse {
  posts: Array<any>;
}

export function fetchPosts(): Promise<any> {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(handleErrors);
}

const handleErrors = (response: any) => {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response.json();
};

