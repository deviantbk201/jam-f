import styled from "styled-components";
import { devices } from "./Global";
const StyledNav = styled.nav`
  grid-column: 2 / span 1;
  align-items: center;
  justify-items: center;
  font-size: 1.8rem;
  justify-self: end;
  display: flex;
  gap: 2rem;

  @media only screen and ${devices.lg} {
    display: none;
  }
`;

export default StyledNav;
