import React from "react";
import Image from "next/image";
import { Meta } from "@/components";

export default function about() {
  return (
    <>
      <Meta
        title="About - HealthBrim"
        description="HealthBrim is a health diagnosis web app that helps people match their
        symptoms to diseases based on data from reputable health information
        databases like WHO, Mayo Clinic, Healthline etc. Disclaimer
        Diagnosis from our tools or blog should not be taken as 100% accurate,
        we encourage you to visit your medical doctor for full checkup to
        confirm any diagnosis on HealthBrim."
        url={`https://www.healthbrim.com/about`}
      />
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
        Diagnosis from our tools or blog should not be taken as 100% accurate,
        we encourage you to visit your medical doctor for full checkup to
        confirm any diagnosis on HealthBrim.
      </div>
    </>
  );
}
