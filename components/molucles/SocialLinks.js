import Img from "../atoms/Img";
import Link from "next/link";
export default function SocialLinks({ w, h, className }) {
  return (
    <div className={className}>
      <Link href="#">
        <Img w={w} h={h} alt="social-logo" src="/facebook.svg" />
      </Link>
      <Link href="#">
        <Img w={w} h={h} alt="social-logo" src="/instagram.svg" />
      </Link>
      <Link href="#">
        <Img w={w} h={h} alt="social-logo" src="/twitter.svg" />
      </Link>
      <Link href="#">
        <Img w={w} h={h} alt="social-logo" src="/linkedin.svg" />
      </Link>
    </div>
  );
}
