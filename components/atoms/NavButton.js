import { useState } from "react";
import { Burgerbutton } from "../styled/BurgerMenu";
import { StyledNavButton } from "../styled/NavButtonStyles";
export default function NavButton({ handleClick }) {
  return (
    <StyledNavButton>
      <div onClick={handleClick} className="btn"></div>
    </StyledNavButton>
  );
}
