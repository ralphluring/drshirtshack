// src/components/NavBar.js
import styled from "styled-components";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 10px;
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <NavLink href="/">Home</NavLink>
      <NavLink href="shop">Shop</NavLink>
      <NavLink href="info">Info</NavLink>
    </StyledNavBar>
  );
}

export default NavBar;
