import StyledNav from "../styled/NavStyles";
import NavLink from "../atoms/NavLink";
export default function Nav({ navItems }) {
  const navItemlList = navItems.map(({ href, destination }) => (
    <NavLink href={href} destination={destination} key={destination} />
  ));

  return <StyledNav>{navItemlList}</StyledNav>;
}
