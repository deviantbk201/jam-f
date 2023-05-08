import Image from "next/image";

export default function Img({ src, alt, w, h }) {
  return <Image src={src} alt={alt} width={w} height={h} />;
}

export function ImgCover({ src, alt }) {
  return <Image src={src} alt={alt} fill />;
}
