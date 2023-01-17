import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <div className="about-wrap">
      <h2>About Us</h2>
      <Image
        src="/assets/images/healthbrim-about.jpeg"
        width="600"
        height="400"
        alt="HealthBrim"
      />
      <br />
      <br />
      HealthBrim is a health diagnosis web app that helps people match their
      symptoms to diseases based on data from reputable health information
      databases like WHO, Mayo Clinic, Healthline among others. Disclaimer
      Diagnosis from our tools or blog should not be taken as 100% accurate, we
      encourage you to visit your medical doctor for full checkup to confirm any
      diagnosis on HealthBrim.
    </div>
  );
}
