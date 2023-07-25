"use client";
import { FC } from "react";
import Lottie from "lottie-react";
import { LottieComponentProps } from "lottie-react";

interface LottieAnimationProps extends LottieComponentProps {}

const LottieAnimation: FC<LottieAnimationProps> = ({ ...rest }) => {
  return <Lottie {...rest} />;
};

export default LottieAnimation;
