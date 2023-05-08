import FooterNavLink from "../atoms/FooterLink";
import { StyledFooterNav } from "../styled/FooterNavStyles";
import { HeadingTertiary } from "../atoms/Typography";
export default function FooterNav({ navItems, title }) {
  const navItemlList = navItems.map(({ href, destination }) => (
    <FooterNavLink href={href} destination={destination} key={destination} />
  ));

  return (
    <StyledFooterNav>
      <HeadingTertiary text={title} />
      {navItemlList}
    </StyledFooterNav>
  );
}
