import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { ThoughtsProvider } from '../contexts/ThoughtsContext';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThoughtsProvider>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            background: '#37373A',
            color: '#fff',
          },
        }}
      />
    </ThoughtsProvider>
  );
}

export default App;
