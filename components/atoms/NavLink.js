import Link from "next/link";
import { StyledLink } from "../styled/StyledLink";

export default function NavLink({ href, destination }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink>{destination}</StyledLink>
    </Link>
  );
}
