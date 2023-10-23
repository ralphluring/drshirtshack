import React from "react";
import CardComponent from "./Card.js";
import boxLogo from "../assets/boxlogo.png";
import shirtshack from "../assets/shirtshack.svg";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto; // Center the wrapper on the page
  display: flex;
  flex-wrap: wrap; // Allow the cards to wrap
  justify-content: space-between; // Distribute cards evenly
  align-content: center;
  padding: 10px;
`;

const StyledCard = styled(CardComponent)`
  margin: 10px; // Add space around each card
`;

function Home() {
  return (
    <StyledWrapper>
      <StyledCard
        imageSrc={boxLogo}
        title="Explore your inner shirt"
        moreInfo="Limited Edition of 100 original shirts"
      />
      <StyledCard
        imageSrc={shirtshack}
        title="live laugh shirt"
        moreInfo="its a work in progress ok?"
      />
    </StyledWrapper>
  );
}

export default Home;
