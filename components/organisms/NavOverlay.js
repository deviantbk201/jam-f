import FooterNav from "../molucles/FooterNav";
import { StyledNavOverlay } from "../styled/NavOverlayStyles";
import SocialLinks from "../molucles/SocialLinks";
import { Theme } from "../styled/Global";
import { SubHeading, HeadingSecondary, Text } from "../atoms/Typography";
import ButtonGlow from "../atoms/ButtonGlow";
import Img from "../atoms/Img";
const navItems = [
  { href: "#", destination: "About us " },
  { href: "#", destination: "Our Services" },
  { href: "#", destination: "Home" },
  { href: "#", destination: "Headless Ecommerce" },
  { href: "#", destination: "Jamstack" },
  { href: "#", destination: "Carrers" },
  { href: "#", destination: "Pricing" },
  { href: "#", destination: "FAQ" },
];

export default function NavOverlay({ showOverlay }) {
  return (
    <StyledNavOverlay className={showOverlay ? "show" : "hidden"}>
      <div className="container-left">
        <FooterNav
          navItems={navItems}
          className="nav-link-container"
          color={Theme.color.white}
          title=""
          hoverColor={Theme.color.black}
        />
        <SocialLinks w={40} h={40} className="social-link-container" />
      </div>

      <div className="container-right">
        <div className="box">
          <figure className="img-box">
            <Img src="/overlay__lets-talk.svg" w={300} h={300} />
          </figure>
          <div className="text-box">
            <HeadingSecondary text="Lets Craft Brilliant Together" />
            <Text text="“A dream you dream alone is a dream. A dream you dream together is reality”" />
            <Text text="  -- Jhon Lenon" className="signature" />
          </div>
          <ButtonGlow
            className="cta-card__button"
            text="Request a Demo"
            href="#"
            color={({ theme }) => theme.color.white}
            bg={({ theme }) => theme.color.primary}
            colorHover={({ theme }) => theme.color.primary}
            bgHover={({ theme }) => theme.color.white}
          />
        </div>
      </div>
    </StyledNavOverlay>
  );
}
