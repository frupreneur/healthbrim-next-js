import React from "react";
export default function Ad() {
  const [state, setState] = React.useState(true);

  const adHolder = React.useRef();
  React.useEffect(() => {
    adHolder.current.innerHTML = `<ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-4787236575206177"
    data-ad-slot="6071203613"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>`;

    let timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          console
            .log("rendering Ad component")(
              (adsbygoogle = window.adsbygoogle || [])
            )
            .push({});
        }
      } catch (err) {
        console.error(err);
      }
    }, 3000);
    return () => {
      console.log("unmounting Ad component");
      clearTimeout(timer);
    };
  });

  return (
    <>
      {state && (
        <div id="ads" className={`ad-container`} aria-hidden={true}>
          <p style={{ fontStyle: "italic" }}>Advertisement</p>
          <div className="adHolder" ref={adHolder}></div>
        </div>
      )}
    </>
  );
}
