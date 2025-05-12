import type { AppProps } from "next/app";
import { Provider } from "../components/ui/provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <title>Isaac Bowyer</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          charSet="utf-8"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
