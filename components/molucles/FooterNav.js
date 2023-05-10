import FooterNavLink from "../atoms/FooterLink";
import { StyledFooterNav } from "../styled/FooterNavStyles";
import { HeadingTertiary } from "../atoms/Typography";
export default function FooterNav({
  navItems,
  title,
  color,
  hoverColor,
  className,
}) {
  const navItemlList = navItems.map(({ href, destination }) => (
    <FooterNavLink
      href={href}
      destination={destination}
      key={destination}
      color={color}
      hoverColor={hoverColor}
    />
  ));

  return (
    <StyledFooterNav className={className}>
      <HeadingTertiary text={title} />
      {navItemlList}
    </StyledFooterNav>
  );
}
