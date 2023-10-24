import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const ShopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111; /* Dark background for neon effect */

  h1 {
    font-size: 3rem;
    color: #0ff; /* Neon cyan color */
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #f00, 0 0 20px #f00,
      0 0 25px #f00, 0 0 30px #f00, 0 0 35px #f00;
  }
`;

function Shop() {
  const neonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(neonRef.current, {
      duration: 0.1,
      opacity: 0.8,
      ease: "power1.inOut",
    })
      .to(neonRef.current, {
        duration: 0.1,
        opacity: 1,
        ease: "power1.inOut",
      })
      .to(neonRef.current, {
        duration: 0.1,
        opacity: 0.8,
        ease: "power1.inOut",
      })
      .to(neonRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <ShopWrapper>
      <h1 ref={neonRef}>Coming soon ...</h1>
    </ShopWrapper>
  );
}

export default Shop;
