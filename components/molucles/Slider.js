import SliderImage from "../atoms/Slide";
import { StyledSlider } from "@/styles/SliderStyles";
import SmoothSliderImage from "../atoms/SliderImageSmooth";
export default function Slider({
  totalSlides,
  srcKey,
  imageformat,
  size,
  smooth,
  sliderWidth,
  imageSize,
}) {
  const SliderArray = [];
  for (let i = 1; i < totalSlides; i++) {
    SliderArray.push(i + 1);
  }

  if (!smooth) {
    return (
      <StyledSlider
        sliderWidth={sliderWidth}
        totalSlides={totalSlides}
        imageSize={imageSize}
      >
        {SliderArray.map((num) => {
          return (
            <SliderImage
              className="slide"
              src={`/${srcKey}-${num}.${imageformat}`}
              size={size}
              alt="logo"
              key={num}
            />
          );
        })}
      </StyledSlider>
    );
  }

  if (smooth) {
    return (
      <StyledSlider sliderWidth={sliderWidth} totalSlides={totalSlides}>
        {SliderArray.map((num) => {
          return (
            <SmoothSliderImage
              className="slide"
              src={`/${srcKey}-${num}.${imageformat}`}
              size={size}
              alt="logo"
              key={num}
            />
          );
        })}
      </StyledSlider>
    );
  }
}
