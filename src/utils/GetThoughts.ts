import { api } from '../services/Api';

interface ThoughtResponse {
  totalPages: number;
  thoughts: ThoughtData[];
}

export async function getThoughts(page = 1, search = ''): Promise<ThoughtResponse> {
  return new Promise<ThoughtResponse>((resolve, reject) => {
    api
      .get('/thoughts', { params: { page, search } })
      .then(({ data }) => {
        resolve({ totalPages: data.pages, thoughts: data.data });
      })
      .catch((error) => {
        console.error('GET /thoughts', error.message);
        resolve({ totalPages: 0, thoughts: [] });
      });
  });
}
