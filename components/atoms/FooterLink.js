import Link from "next/link";
import { StyledFooterLink } from "../styled/FooterLinkStyles";
export default function FooterNavLink({
  href,
  destination,
  color,
  hoverColor,
}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledFooterLink color={color} hoverColor={hoverColor}>
        {destination}
      </StyledFooterLink>
    </Link>
  );
}
