import Image from "next/image";

export default function Logo({ source, altText, width, height, className }) {
  return (
    <Image
      className={className}
      src={source}
      alt={altText}
      width={width}
      height={height}
      priority={true}
    />
  );
}
