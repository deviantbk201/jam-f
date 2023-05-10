import { StyledFooterSection } from "../styled/FooterSectionStyles";
import Card from "../molucles/Card";
import {
  HeadingSecondary,
  Text,
  SubHeading,
  HeadingTertiary,
} from "../atoms/Typography";
import Image from "next/image";
import FooterNav from "../molucles/FooterNav";
import ButtonGlow from "../atoms/ButtonGlow";
import Img from "../atoms/Img";
import { ImgCover } from "../atoms/Img";
import Link from "next/link";
import SocialLinks from "../molucles/SocialLinks";
export default function FooterSection() {
  return (
    <StyledFooterSection>
      {/* ============================Address card */}
      <div className="contact-card">
        <HeadingSecondary className="contact-card__title" text="Address" />
        <div className="contact-card__item">
          <span className="card__icon-box">
            <Image
              className="card-icon"
              src="/location.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
          <Text
            className="contact-card__text"
            text="B-205, ikeva co-working space, Supreme Business Park, Hiranandani Gardens, Powai, Mumbai, India"
          />
        </div>
        <div className="contact-card__item">
          <span className="card__icon-box">
            <Image
              className="card-icon"
              src="/phone.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
          <Text className="contact-card__text" text="1234567890" />
        </div>
        <div className="contact-card__item">
          <span className="card__icon-box">
            <Image
              className="card-icon"
              src="/email.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
          <Text className="contact-card__text" text="xyz@emaail.com" />
        </div>
      </div>
      {/* ===================Our Links----------------- */}
      <FooterNav
        color={({ theme }) => theme.color.greyDark}
        className="our-links footer-links"
        navItems={[
          { href: "#", destination: "Home" },
          { href: "#", destination: "Headless Ecommerce" },
          { href: "#", destination: "Jamstack" },
          { href: "#", destination: "Our Services" },
        ]}
        title="our Links"
      />
      <FooterNav
        color={({ theme }) => theme.color.greyDark}
        className="other-links footer-links"
        navItems={[
          { href: "#", destination: "About us " },
          { href: "#", destination: "Carrers" },
          { href: "#", destination: "Pricing" },
          { href: "#", destination: "FAQ" },
        ]}
        title="other Links"
      />
      {/*====================== Cta card ======================================*/}
      <div className="cta-card">
        <div className="cta-card__text">
          <HeadingSecondary
            className="cta-card__title"
            text="Connect-with-us"
            marginBottom="1rem"
          />
          {/* <SubHeading
            className="cta-card__sub-title"
            text="we would Love to hear From You"
          /> */}
        </div>

        <SocialLinks w={40} h={40} />

        <ButtonGlow
          className="cta-card__button"
          text="Request a Demo"
          href="#"
          color={({ theme }) => theme.color.white}
          bg={({ theme }) => theme.color.primary}
          colorHover={({ theme }) => theme.color.primary}
          bgHover={({ theme }) => theme.color.white}
        />
      </div>
      {/* Proud to be part of==============================  */}
      <div className="featured-in">
        <SubHeading
          text="Proud to be part of"
          fontWeight={200}
          marginBottom="0rem"
        />
        <div className="images-box">
          <figure className="image-box">
            <ImgCover src="/start-up-India.webp" alt="img" className="image" />
          </figure>
          <figure className="image-box">
            <ImgCover src="/dpiit.svg" alt="img" className="image" />
          </figure>
          <figure className="image-box">
            <ImgCover src="/jamsfy-logo.svg" alt="img" className="image" />
          </figure>
        </div>
      </div>
      {/* copyright==================================== */}
      <div className="copyright">
        <HeadingTertiary text="©2021 Jamsfy. All Rights Reserved" />
        <HeadingTertiary text="Built with ❤️ in JAMstack" />
      </div>
    </StyledFooterSection>
  );
}
