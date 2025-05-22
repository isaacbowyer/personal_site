import type { AppProps } from "next/app";
import { Provider as ChakraProvider } from "../components/ui/provider";
import Head from "next/head";
import { IsMobileProvider } from "@/context/useIsMobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CustomLoadingSpinner } from "@/components/atoms/CustomLoadingSpinner";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // or however long you want
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

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

          <link rel="icon" href="/favicon.svg" />
        </Head>

        {loading ? <CustomLoadingSpinner /> : <Component {...pageProps} />}
      </IsMobileProvider>
    </ChakraProvider>
  );
}
