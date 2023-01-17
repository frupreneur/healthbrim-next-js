import React from "react";
import Link from "next/link";

export default function DiseaseContainer({
  data: { title, route, description },
}) {
  return (
    <div className="disease-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      <Link href={`/disease/${route}`} alt={title}>
        <button className="nextBTN" name={title}>
          Check Symptoms
        </button>
      </Link>
    </div>
  );
}
