import Title from "../atoms/Title";
import { StyledHero } from "../styled/HeroSectionStyles";
import ButtonLink from "../atoms/ButtonLink";
export default function Hero() {
  return (
    <>
      <StyledHero>
        <Title />
        <ButtonLink
          text="Join us"
          color="#fff"
          bg="#000"
          colorHover="#f73365"
          bgHover="#f7f7f7"
          href="#"
        />
      </StyledHero>
    </>
  );
}
