import React from "react";
import Head from "next/head";
import { Header, Footer, Meta } from "../components";

import { Andika } from "@next/font/google";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HealthBrim - Check your health symptoms</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4787236575206177"
          crossOrigin="anonymous"
        ></script> */}
      </Head>
      <main className={andika.className}>
        <Header />
        <section className="main">{children}</section>
        <Footer />
      </main>
    </>
  );
}
