import Card from "../molucles/Card";
import Img from "../atoms/Img";
import { StyledBenefitsSection } from "../styled/BenefitsSectionStyles";
import {
  HeadingSecondary,
  SubHeading,
  HeadingTertiary,
  Text,
} from "../atoms/Typography";
import { ImgCover } from "../atoms/Img";
export const features = [
  {
    src: "/agile-process.svg",
    title: "Agile process",
    text: "Our development process is a derivative of the Agile process allowing us to deliver promised outputs in optimal timelines.",
  },
  {
    src: "/flexible-pricing-plan.svg",
    title: "Flexible Pricing",
    text: "Jamsfy provides pricing plans that cater to all wallet sizes. Development and budget now go hand in hand.",
  },
  {
    src: "/free-maintenance.svg",
    title: "Free Maintenence",
    text: "Jamsfy is with you till the end. Don't have the time or resources to maintain the website. We will do it for you. Free of cost!",
  },
  {
    src: "/higher-efficiency.svg",
    title: "Higher efficiency",
    text: "Here at Jamsfy we understand the essence of time. We deliver our finest work in slim timelines at great efficiency.",
  },
  {
    src: "idea-validation-development.svg",
    title: "Validation & develpoement",
    text: "Have a unique idea but struggling in execution? Jamsfy will provide feasibility and budget estimations before developing it for you.",
  },
  {
    src: "latest-technology-stack.svg",
    title: "Latest Tech",
    text: "We bring the latest technology stack on the platter custom-tuned to suit your business requirement.",
  },
];
export default function BenefitsSection() {
  return (
    <StyledBenefitsSection>
      <div className="section-heading-box">
        <HeadingSecondary
          className="heading-main"
          text="Enjoy the assurance of quality and efficiency with ..."
        />
      </div>

      <div className="cards-container">
        {features.map((el) => {
          return (
            <Card className="card" key={el.title}>
              <figure className="card-img-box">
                <ImgCover className="card-img" src={el.src} alt="img" />
              </figure>
              <div className="card-details">
                <HeadingTertiary className="card-title" text={el.title} />
                <Text className="card-text" text={el.text} />
              </div>
            </Card>
          );
        })}
      </div>
    </StyledBenefitsSection>
  );
}
