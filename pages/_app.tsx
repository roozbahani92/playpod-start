import "../styles/globals.css";

import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import connectMouseEvents from "../utils/connectMouse";
import {eventSubscribe} from "../utils/EventSubscribe";
import nextI18NextConfig from "../next-i18next.config.js";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <NextNprogress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
