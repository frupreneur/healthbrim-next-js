import React from "react";
import { ContactForm, Meta } from "@/components";

export default function contact() {
  return (
    <>
      <Meta
        title="Contact Us - HealthBrim"
        description="HealthBrim diagnosis web app uses data from reputable online health
        resources like webmd, healthline and Mayo Clinic to make diagnosis
        estimations. PLEASE DON`T TAKE DIAGNOSIS FROM OUR TOOLS AS 100%
        ACCURATE, ALWAYS VISIT YOUR DOCTOR TO CONFIRM ANY DIAGNOSIS."
        url={`https://www.healthbrim.com/contact`}
      />
      <ContactForm />
    </>
  );
}
