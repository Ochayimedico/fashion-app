export const sideMenuVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: "100vw",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    x: "-100vw",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const shoppingCategoryVariants = {
  whileHover: { scale: 0.9 },
  whileTap: { scale: 0.9 },
  hidden: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 1 } },
  viewport: { once: true },

  // visible:{
  //   transition:{
  //     x:"100vw",
  //     Infinity:
  //   }
  // }
};
