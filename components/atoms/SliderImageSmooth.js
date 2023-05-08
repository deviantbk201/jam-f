import Image from "next/image";
import { StyledSmoothSldierImage } from "../styled/SliderSmoothImageStyles";

export default function SmoothSliderImage({ src, size, alt }) {
  return (
    <StyledSmoothSldierImage>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="slide , image"
      />
    </StyledSmoothSldierImage>
  );
}
