import { useState } from "react";
import { Burgerbutton } from "../styled/BurgerMenu";
import { StyledNavButton } from "../styled/NavButtonStyles";
export default function NavButton() {
  const [active, setActive] = useState(false);

  let btnClass = "btn";

  function handleClick(e) {
    e.stopPropagation();
    alert("working");
  }
  return (
    <StyledNavButton onClick={handleClick}>
      <div className="btn"></div>
    </StyledNavButton>
  );
}
