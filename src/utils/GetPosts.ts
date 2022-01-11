import { api } from '../services/Api';

interface PostResponse {
  totalPages: number;
  posts: PostData[];
}

export async function getPosts(page = 1): Promise<PostResponse> {
  return new Promise<PostResponse>((resolve, reject) => {
    api
      .get('/posts', { params: { page } })
      .then(({ data }) => {
        resolve({ totalPages: data.pages, posts: data.data });
      })
      .catch((error) => {
        console.error('GET /posts', error.message);
        resolve({ totalPages: 0, posts: [] });
      });
  });
}
