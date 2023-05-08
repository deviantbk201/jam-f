import { StyledQuestionsSection } from "../styled/QuestionSectionStyles";
import Card from "../molucles/Card";
import ButtonLink from "../atoms/ButtonLink";
import { HeadingSecondary, Text } from "../atoms/Typography";
export default function Questions() {
  return (
    <StyledQuestionsSection>
      <div className="container">
        <div className="text-box">
          <HeadingSecondary
            text="Got Questions?"
            color={({ theme }) => theme.color.white}
          />
          <div className="bar"></div>
          <Text
            color={({ theme }) => theme.color.white}
            text="We Would love to answer Your questions so that you can make informed choice. We are extremely easy to reach out and are a joy to talk to. Hit us up!"
          />
        </div>

        <div className="card-container">
          <Card className="card card__faq">
            <figure className="card-image"></figure>
            <ButtonLink
              href="#"
              text="FAQ"
              className="btn"
              hoverColor={({ theme }) => theme.color.white}
              bgHover={({ theme }) => theme.color.primary}
            />
          </Card>
          <Card className="card card__get-in-touch">
            <figure className="card-image"></figure>
            <ButtonLink
              text="Get In Touch"
              href="#"
              className="btn"
              hoverColor={({ theme }) => theme.color.white}
              bgHover={({ theme }) => theme.color.primary}
            />
          </Card>
          <Card className="card card__start-chat">
            <figure className="card-image"></figure>
            <ButtonLink
              text="Start Chat"
              href="#"
              className="btn"
              hoverColor={({ theme }) => theme.color.white}
              bgHover={({ theme }) => theme.color.primary}
            />
          </Card>
        </div>
      </div>
    </StyledQuestionsSection>
  );
}
