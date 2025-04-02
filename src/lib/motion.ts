import { Variants } from "motion/react";

const transition = {
  type: "spring",
  bounce: 0.2,
  duration: 1.5
};

export const motionVariants: Variants = {
  hidden: { opacity: 0.13 },
  visible: { opacity: 1, transition: transition },
  exit: { opacity: 0.13, transition: transition },
  verticalHidden: { y: 100, opacity: 0.25 },
  verticalVisible: { y: 0, opacity: 1, transition: transition },
  horizontalHidden: { x: 100, opacity: 0.25 },
  horizontalVisible: { x: 0, opacity: 1, transition: transition }
};
