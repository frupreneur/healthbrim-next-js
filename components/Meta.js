import React from "react";
import Head from "next/head";

export default function Meta({
  title = "HealthBrim - Check your health symptoms",
  description = "HealthBrim is a health diagnosis web app that helps people match their symptoms to diseases based on data from reputable health information databases like WHO, Mayo Clinic, Healthline among others.",
  url = "https://www.healthbrim.com",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/assets/favicon.ico" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
