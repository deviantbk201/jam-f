import { StyledWhyUsSection } from "../styled/WhyUsSectionStyles";
import { HeadingSecondary, Text } from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink";
import { ImgCover } from "../atoms/Img";
export default function WhyUsSection() {
  return (
    <StyledWhyUsSection>
      <figure className="img-box">
        <ImgCover className="image" src="/why-jamstack.svg" alt="image" fill />
      </figure>
      <div className="text-box">
        <HeadingSecondary
          ClassName="heading-main"
          text="What is Jamstack?"
          color="#fff"
        />
        <Text
          className="description"
          fontSize="2rem"
          color="#fff"
          text="Jamstack is not confined to a single technology. It is a modern architecture-based approach towards building websites with virtually no loading time and applications that deliver better performance, higher security, lower cost of scaling, and a better developer as well as user experience. We here at Jamsfy are Jamstack experts and provide the best Jamstack development experience as per your need. We understand the need for blazing fast, secure and scalable websites."
        />

        <ButtonLink
          text="Learn More"
          href="#"
          className="btn"
          color={({ theme }) => theme.color.white}
          bg={({ theme }) => theme.color.primary}
          colorHover={({ theme }) => theme.color.primary}
          bgHover={({ theme }) => theme.color.white}
        />
      </div>
    </StyledWhyUsSection>
  );
}
