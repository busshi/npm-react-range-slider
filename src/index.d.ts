import { ComponentType, InputHTMLAttributes } from "react";

export interface RangeSliderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  color?: string;
  width?: string;
  height?: string;
  background?: string;
}

declare const RangeSlider: ComponentType<RangeSliderProps>;

export default RangeSlider;
