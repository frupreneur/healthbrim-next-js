import React, { useMemo } from "react";
import { DiseaseContainer } from "@/components";
import { useGlobalState } from "@/state";

export default function RelatedDiseases({ presentDiseaseSlug }) {
  const db = useGlobalState();
  const diseasesArr = Object.values(db)
    .filter((x) => x.route != presentDiseaseSlug)
    .slice(0, 4);

  //   function randomFourPicker(arr) {
  //     let initArr = [];

  //     let tempArr = [...arr];
  //     for (let i = 0; i < 4; i++) {
  //       initArr.push(
  //         tempArr.splice(Math.floor(Math.random() * tempArr.length), 1)[0]
  //       );
  //     }

  //     return initArr;
  //   }

  //   //   const relatedDiseases = useMemo(
  //   //     () => randomFourPicker(diseasesArr),
  //   //     [diseasesArr]
  //   //   );

  //   //   console.log(relatedDiseases)

  return (
    <div>
      {/* <h2 className="related-title">Popular On HealthBrim</h2> */}
      <div className="related-wrapper">
        {diseasesArr.map((disease) => (
          <DiseaseContainer
            key={disease.route}
            data={{
              title: disease.title,
              description: disease.description,
              route: disease.route,
            }}
          />
        ))}
      </div>
    </div>
  );
}
