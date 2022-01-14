import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { PostsProvider } from '../contexts/PostsContext';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            background: '#37373A',
            color: '#fff',
          },
        }}
      />
    </PostsProvider>
  );
}

export default App;
