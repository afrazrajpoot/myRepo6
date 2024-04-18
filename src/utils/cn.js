export const containerVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 0.95, // Increased opacity
    transition: { duration: 1, type: "spring", stiffness: 80 }, // Slower speed
  },
};
