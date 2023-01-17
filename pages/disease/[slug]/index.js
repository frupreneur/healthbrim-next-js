import React from "react";
import { DATABASE } from "@/db";

import { QuestionContainer, RelatedDiseases, Ad, Meta } from "@/components";

export default function DiseaseDetails({ data }) {
  return (
    <>
      <Meta title={data.title} description={data.description} />
      <h1 className="title-container">{data.title}</h1>
      <QuestionContainer questions={data.questions} route={data.route} />
      <Ad />
      <RelatedDiseases presentDiseaseSlug={data.route} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.values(DATABASE).map((value) => ({
    params: { slug: value.route },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const route = context.params.slug;

  let data = [];
  for (const key in DATABASE) {
    if (DATABASE[key].route === route) {
      data.push(DATABASE[key]);
    }
  }
  data = data[0];

  return {
    props: {
      data,
    },
  };
}
