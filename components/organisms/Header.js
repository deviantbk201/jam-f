import { StyledHeader } from "../styled/StyledHeader";
import Nav from "../molucles/Nav";
import Logo from "../atoms/Logo";
import NavButton from "../atoms/NavButton";
export default function Header() {
  return (
    <StyledHeader>
      <Logo
        source="/jamsfy-logo.svg"
        altText="Logo of jamsfy"
        width={130}
        height={70}
      />
      <Nav
        navItems={[
          { href: "#", destination: "JAMstack" },
          { href: "#", destination: "Headless e-commerce" },
          { href: "#", destination: "About us" },
          { href: "#", destination: "Services" },
          { href: "#", destination: "Pricing" },
          { href: "#", destination: "Contact us" },
        ]}
      />
      <NavButton />
    </StyledHeader>
  );
}
