import Link from "next/link";
import { StyledFooterLink } from "../styled/FooterLinkStyles";
export default function FooterNavLink({ href, destination }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledFooterLink>{destination}</StyledFooterLink>
    </Link>
  );
}
