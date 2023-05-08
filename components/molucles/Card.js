import { StyledCard } from "../styled/CardStyles";

export default function Card({ children, className }) {
  return <StyledCard className={className}>{children}</StyledCard>;
}
