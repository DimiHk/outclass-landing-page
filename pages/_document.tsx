import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>OUTCLASS</title>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            href="outclassWhite.svg"
            type="image/svg+xml"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="shortcut icon"
            href="outclassDark.svg"
            type="image/svg+xml"
            media="(prefers-color-scheme: dark)"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
