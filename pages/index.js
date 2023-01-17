import React from "react";
import { DiseaseContainer, Ad } from "@/components";
import { DATABASE } from "@/db";

export default function Home(props) {
  return (
    <>
      <Ad />
      <div className="site-wrap" id="site-wrap">
        {props.data.map((dbItem) => (
          <DiseaseContainer key={dbItem.route} data={dbItem} />
        ))}
      </div>
      <Ad />
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
