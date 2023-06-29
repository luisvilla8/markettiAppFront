import { Variants } from "framer-motion";

export const authTitleVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .6,
    }
  }
}