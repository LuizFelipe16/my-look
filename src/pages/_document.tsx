import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Roboto:wght@100;200;300;400;500;600;700;800&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

          <link rel="shortcut icon" href="/logo.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://unpkg.com/aos@next/dist/aos.js" async />
          <script>
            AOS.init();
          </script>
        </body>
      </Html>
    );
  }
}