// src/components/Logo.js
import styled from "styled-components";
import logo from "../man.svg"; // Replace with the path to your logo

const StyledLogo = styled.img`
  width: 150px; // Adjust as needed
  height: auto;
  display: block;
  margin: 50px auto; // Centers the logo vertically and horizontally
`;

function Logo() {
  return <StyledLogo src={logo} alt="Dr. Shirt Shack Logo" />;
}

export default Logo;
