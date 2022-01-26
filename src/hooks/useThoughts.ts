import { useContext } from 'react';

import { ThoughtsContext } from '../contexts/ThoughtsContext';

export function useThoughts() {
  return useContext(ThoughtsContext);
}
