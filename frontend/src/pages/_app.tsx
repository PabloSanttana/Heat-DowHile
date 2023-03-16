import Head from "next/head";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/hooks/auth";
import { GlobalStyle } from "@/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Heat</title>
        <meta name="description" content="Heat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
export default MyApp;
