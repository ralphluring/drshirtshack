import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import eyeIcon from "../assets/eye.svg";

const CardWrapper = styled.div`
  border-radius: 10px;
  width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  perspective: 1000px;
`;

const ImageSection = styled.div`
  width: 400px;
  height: 400px;
  background: url(${(props) => props.imageSrc}) no-repeat center center;
  background-size: cover;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: black;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const LinkSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: black;
`;

const EyeIcon = styled.img`
  width: 50px;
  height: 50px;
`;

function SimpleCard({ imageSrc, text }) {
  const iconRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnterIcon = () => {
    gsap.to(iconRef.current, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeaveIcon = () => {
    gsap.to(iconRef.current, {
      y: 0,
      duration: 0.7,
      ease: "bounce.out",
    });
  };

  return (
    <CardWrapper>
      <ImageSection
        ref={imageRef}
        imageSrc={imageSrc}
        onMouseEnter={() => {
          gsap.to(imageRef.current, {
            rotationY: 180,
            duration: 0.5,
          });
        }}
        onMouseLeave={() => {
          gsap.to(imageRef.current, {
            rotationY: 0,
            duration: 0.5,
          });
        }}
      />
      <TextSection
        ref={textRef}
        onMouseEnter={() => {
          gsap.to(textRef.current, {
            scale: 1.1,
            color: "pink",
            duration: 0.3,
          });
        }}
        onMouseLeave={() => {
          gsap.to(textRef.current, {
            scale: 1,
            color: "black",
            duration: 0.3,
          });
        }}
      >
        {text}
      </TextSection>
      <LinkSection>
        <EyeIcon
          src={eyeIcon}
          alt="Eye Icon"
          ref={iconRef}
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
        />
      </LinkSection>
    </CardWrapper>
  );
}

export default SimpleCard;
