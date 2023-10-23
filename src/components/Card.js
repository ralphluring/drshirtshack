import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import openIconSrc from "../assets/open.svg";
import closeIconSrc from "../assets/close.svg";

const CardWrapper = styled.div`
  position: relative;
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  margin: 0;
  padding: 1em;
  text-align: center;
  font-size: 1.2em;
`;

const IconButton = styled.button``;

const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const MoreInfoDrawer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #e0e0e0;
  overflow: hidden;
`;

function CardComponent({ imageSrc, title, moreInfo }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen) {
      gsap.to(drawerRef.current, { height: "200px", duration: 0.3 });
    } else {
      gsap.to(drawerRef.current, { height: "0px", duration: 0.3 });
    }
  }, [isDrawerOpen]);

  return (
    <CardWrapper>
      {imageSrc && <CardImage src={imageSrc} alt={title} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {!isDrawerOpen ? (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <img src={openIconSrc} alt="Open drawer" />
          </IconButton>
        ) : (
          <IconWrapper>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <img src={closeIconSrc} alt="Close drawer" />
            </IconButton>
          </IconWrapper>
        )}
      </CardContent>
      <MoreInfoDrawer ref={drawerRef}>{moreInfo}</MoreInfoDrawer>
    </CardWrapper>
  );
}

export default CardComponent;
