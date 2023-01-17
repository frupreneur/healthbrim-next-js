import React from "react";
import { DiseaseContainer, Ad, Meta } from "@/components";
import { DATABASE } from "@/db";

export default function Home(props) {
  return (
    <>
      <Meta
        description="HealthBrim diagnosis web app that uses data from reputable online health
        resources like webMD, Healthline and Mayo Clinic to make diagnosis
        estimations."
        url={`https://www.healthbrim.com`}
      />
      <Ad />
      <div className="site-wrap" id="site-wrap">
        {props.data.map((dbItem) => (
          <DiseaseContainer key={dbItem.route} data={dbItem} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const data = [];

  for (const value of Object.values(DATABASE)) {
    data.push(value);
  }

  return {
    props: {
      data,
    },
  };
}
