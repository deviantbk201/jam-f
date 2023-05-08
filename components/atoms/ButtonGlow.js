import { StyledButtonGlow } from "../styled/ButtonGlowStyles";
export default function ButtonGlowLink(props) {
  return (
    <StyledButtonGlow href={props.href} {...props}>
      {props.text}
    </StyledButtonGlow>
  );
}
