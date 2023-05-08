import {
  StyledSecondaryHeading,
  StyledTertiaryHeading,
  StyledSubHeading,
  StyledText,
} from "../styled/TypographyStyles";

export function HeadingSecondary(props) {
  return (
    <StyledSecondaryHeading {...props}>{props.text}</StyledSecondaryHeading>
  );
}
export function HeadingTertiary(props) {
  return <StyledTertiaryHeading {...props}>{props.text}</StyledTertiaryHeading>;
}

export function SubHeading(props) {
  return <StyledSubHeading {...props}>{props.text}</StyledSubHeading>;
}

export function Text(props) {
  return <StyledText {...props}>{props.text}</StyledText>;
}
