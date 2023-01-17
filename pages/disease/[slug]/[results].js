import React from "react";
import { useRouter } from "next/router";
import { Meta, RelatedDiseases, Ad } from "@/components";
import { DATABASE } from "@/db";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export default function Results({ data: { name, disease, results } }) {
  const url = `https://www.healthbrim.com/disease/${useRouter().query.slug}/${
    useRouter().query.results
  }`;

  return (
    <>
      <Meta
        title={`${disease.title} - Diagnosis Results`}
        description={disease.description}
        url={url}
      />
      <div className="results-wrapper">
        <h2>Diagnosis Results</h2>
        {results.correct / results.total > 0.5 ? (
          <p style={{ color: "red" }}>
            From your answers, you posses some symptoms of {name} patients have
            complained of to medical doctors.. (Please don`t take this result as
            final, check with a doctor to run actual tests to confirm.)
          </p>
        ) : (
          <p style={{ color: "green" }}>
            From your answers, there is a very low chance you have diabetes.
            {name}(Please don`t take this result as final, check with a doctor
            to run actual tests to confirm.)
          </p>
        )}
      </div>
      <div className="share-container">
        <h2 className="share-title">HELP YOUR FRIENDS STAY HEALTHY</h2>
        <p className="share-description">
          {" "}
          Share this website with your friends so they can check their health
          too.
        </p>
        <div className="wa-share">
          <Link
            className="whatsapp"
            href={`whatsapp://send?text=${disease.title} - Check your Health. %0a %0aClick here to check your health => https://www.healthbrim.com/disease/${disease.route}`}
            data-action="share/whatsapp/share"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp style={{ fontSize: "2rem" }} />
            Share On WhatsApp
          </Link>

          <Link
            className="facebook"
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.healthbrim.com/disease/${disease.route}&amp;t=${disease.title} - Check your Health}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook style={{ fontSize: "2rem" }} />
            Share On Facebook
          </Link>
        </div>
      </div>
      <Ad />
      <RelatedDiseases presentDiseaseSlug={disease.route} />
    </>
  );
}

export function getStaticPaths() {
  let paths = [];
  Object.values(DATABASE).forEach((value) => {
    for (let i = 1; i <= value.questions.length; i++) {
      paths.push({
        params: {
          slug: value.route,
          results: `results-${i}-${value.questions.length}`,
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}
export function getStaticProps(context) {
  const { slug, results } = context.params;
  const result = results.split("-");

  let data = [];
  for (const [key, value] of Object.entries(DATABASE)) {
    if (value.route === slug) {
      data.push({
        name: key,
        disease: value,
        results: {
          correct: Number(result[1]),
          total: Number(result[2]),
        },
      });
    }
  }
  data = data[0];
  return {
    props: {
      data,
    },
  };
}
