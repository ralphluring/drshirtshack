// src/components/NavBar.js
import styled from "styled-components";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px;
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Shop</NavLink>
      <NavLink href="#">Contact</NavLink>
    </StyledNavBar>
  );
}

export default NavBar;
