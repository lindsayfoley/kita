import "@kita/styles/globals.css";
import "@kita/styles/colours.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
