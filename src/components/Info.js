import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const InfoWrapper = styled.div`
  font-family: monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
`;

function Info() {
  const infoRef = useRef(null);

  useEffect(() => {
    const elements = infoRef.current.children;
    gsap.set(elements, { autoAlpha: 0 });

    gsap.to(elements, {
      delay: 1,
      duration: 2, // Increase the duration for slower typing
      text: {
        value: "",
        delimiter: "",
      },
      stagger: 1, // Increase the stagger for more delay between each element
      autoAlpha: 1,
    });
  }, []);

  return (
    <InfoWrapper ref={infoRef}>
      <h2>Hand Printed Shirts. Custom Prints. Design.</h2>
      <p>Curation. Selection.</p>
      <h1>NEVER COMPROMISE THE SHIRT INSIDE YOU</h1>
      <p>Drown in a cold one think of a loved one</p>
    </InfoWrapper>
  );
}

export default Info;
