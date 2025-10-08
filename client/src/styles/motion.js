// Global motion tokens and helpers
export const motionTokens = {
  duration: {
    xs: 0.2,
    sm: 0.3,
    md: 0.6,
    lg: 0.9
  },
  ease: {
    standard: [0.2, 0.8, 0.2, 1],
    decel: [0.05, 0.7, 0.1, 1],
    accel: [0.3, 0, 0.7, 0.1]
  },
  spring: {
    gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 },
    soft: { type: 'spring', stiffness: 90, damping: 18, mass: 0.9 }
  }
};

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 }
  },
  stagger: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }
};

export const transitions = {
  fast: { duration: motionTokens.duration.sm, ease: motionTokens.ease.standard },
  base: { duration: motionTokens.duration.md, ease: motionTokens.ease.standard },
  slow: { duration: motionTokens.duration.lg, ease: motionTokens.ease.decel }
};

// Utility: create a transition with optional delay
export function withDelay(base, delay = 0) {
  return { ...base, delay };
}


