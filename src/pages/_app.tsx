import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            background: '#37373A',
            color: '#fff',
          },
        }}
      />
    </>
  );
}

export default App;
