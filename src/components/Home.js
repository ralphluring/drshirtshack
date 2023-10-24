import React from "react";
import SimpleCard from "./Card.js";
import boxlogo from "../assets/boxlogo.png";
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
  background-color: #f5f5f5;
`;

const StyledCard = styled(SimpleCard)`
  margin: 10px; // Add space around each card
`;

function Home() {
  return (
    <StyledWrapper>
      <SimpleCard
        imageSrc={boxlogo}
        text="Shirts come from within but are worn without"
      />
    </StyledWrapper>
  );
}

export default Home;
