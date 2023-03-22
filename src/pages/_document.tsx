import { CssBaseline } from '@nextui-org/react';
import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

export default function Document() {
  const getInitialProps = async (ctx:DocumentContext):Promise<DocumentInitialProps>=> {
    const initialProps = await getInitialProps(ctx);
    return  { ...initialProps, styles: <>{initialProps.styles}</> };
  }
  return (
    <Html lang="es">
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}