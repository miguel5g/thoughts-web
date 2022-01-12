import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Primary Meta Tags */}
          <meta
            name="title"
            content="Pensamentos do Miguel - Um site onde eu posto o que penso e o que quero!"
          />
          <meta
            name="description"
            content="Um simples site para publicar meus pensamentos e notas mentais sem me preocupar com o que os outros iram pensar, pois é meu local de anotações públicas!"
          />
          <meta name="theme-color" content="#121214" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thoughts-sigma.vercel.app/" />
          <meta
            property="og:title"
            content="Pensamentos do Miguel - Um site onde eu posto o que penso e o que quero!"
          />
          <meta
            property="og:description"
            content="Um simples site para publicar meus pensamentos e notas mentais sem me preocupar com o que os outros iram pensar, pois é meu local de anotações públicas!"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://thoughts-sigma.vercel.app/" />
          <meta
            property="twitter:title"
            content="Pensamentos do Miguel - Um site onde eu posto o que penso e o que quero!"
          />
          <meta
            property="twitter:description"
            content="Um simples site para publicar meus pensamentos e notas mentais sem me preocupar com o que os outros iram pensar, pois é meu local de anotações públicas!"
          />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="font-mono bg-gray-dark text-white-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
