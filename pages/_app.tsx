import type { AppProps } from "next/app";
import { Provider as ChakraProvider } from "../components/ui/provider";
import Head from "next/head";
import { IsMobileProvider } from "@/context/useIsMobile";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <IsMobileProvider>
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
      </IsMobileProvider>
    </ChakraProvider>
  );
}
