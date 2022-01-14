import { useContext } from 'react';

import { PostsContext } from '../contexts/PostsContext';

export function usePosts() {
  return useContext(PostsContext);
}
