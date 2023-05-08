import { StyledButtonLink } from "../styled/ButtonLinkStyles";
export default function ButtonLink(props) {
  return (
    <StyledButtonLink href={props.href} {...props}>
      {props.text}
    </StyledButtonLink>
  );
}
