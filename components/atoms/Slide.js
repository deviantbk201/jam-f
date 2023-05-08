import Image from "next/image";

export default function SliderImage({ src, size, alt }) {
  return (
    <Image className="slide" src={src} alt={alt} width={size} height={size} />
  );
}
