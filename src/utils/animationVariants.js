export const sideMenuVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: "0",
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
      ease: "easeOut",
    },
  },
};
export const listVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      ease: "easeInOut",
      delay: 0.5,
      duration: 0.8,
    },
  },
};
export const childListVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: "0" },
  transition: {
    ease: "easeInOut",
    delay: 0.5,
    duration: 0.5,
  },
};

export const seeAllListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      ease: "easeIn",
      duration: 0.3,
    },
  },
  // exit: {
  //   opacity: 0,
  //   y: "-100%",
  //   transition: {
  //     duration: 1,
  //   },
  // },
};
export const childSeeAllListVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};
export const menuVariants = {
  // hidden: { opacity: 0 },
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

export const shoppingCategoryContainerVariants = {
  hidden: { x: 100 },
  visible: { x: "-100vw", transition: { repeat: "Infinity", duration: 30 } },
  exit: { x: 0 },
  transition: { delay: 3 },
};

export const shoppingCategoryVariants = {
  hidden: { scale: 0.9 },
  hover: { scale: 0.9 },
  tap: { scale: 0.9 },
  // hidden: { opacity: 0 },
  inView: { scale: 1, transition: { duration: 0.5, delay: 0.1 } },
  // viewport: { once: true },

  // visible:{
  //   transition:{
  //     x:"100vw",
  //     Infinity:
  //   }
  // }
};

// export const infiniteSlideVariants={
//   visible:{
//   slide
//   }
// }
