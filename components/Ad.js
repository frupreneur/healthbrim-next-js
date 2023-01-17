import React from "react";

export default function Ad() {
  React.useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div id="ads" class="ad-container">
      <p style={{ fontStyle: "italic" }}>Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4787236575206177"
        data-ad-slot="6071203613"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
