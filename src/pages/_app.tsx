import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AllProviders } from "../providers/AllProviders";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AllProviders>
        <Component {...pageProps} />
      </AllProviders>
    </>
  );
}
