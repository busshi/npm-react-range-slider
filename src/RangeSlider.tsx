import React from "react";
import "./RangeSlider.css";

interface RangeSliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
  dotColor?: string;
  dotSize?: string;
  activeDotSize?: string;
}

interface RangeSliderStyle extends React.CSSProperties {
  "--range-slider-width"?: string;
  "--range-slider-height"?: string;
  "--range-slider-border-radius"?: string;
  "--range-slider-background"?: string;
  "--range-slider-dot-color"?: string;
  "--range-slider-dot-size"?: string;
  "--range-slider-active-dot-size"?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  onChange,
  min = 0,
  max = 100,
  step = 5,
  value = 0,
  width = "100px",
  height = "3px",
  borderRadius = "50%",
  background = "#eee",
  dotColor = "#3b00fe",
  dotSize = "12px",
  activeDotSize = "15px",
}) => {
  const rangeSliderStyle: RangeSliderStyle = {
    "--range-slider-width": width,
    "--range-slider-height": height,
    "--range-slider-border-radius": borderRadius,
    "--range-slider-background": background,
    "--range-slider-dot-color": dotColor,
    "--range-slider-dot-size": dotSize,
    "--range-slider-active-dot-size": activeDotSize,
  };

  return (
    <input
      type="range"
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      value={value}
      className="range-slider"
      style={rangeSliderStyle}
    />
  );
};

export default RangeSlider;
