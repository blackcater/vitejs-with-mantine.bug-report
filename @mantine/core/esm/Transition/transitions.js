const transitions = {
  fade: {
    in: {opacity: 1},
    out: {opacity: 0},
    transitionProperty: "opacity"
  },
  "skew-up": {
    in: {opacity: 1, transform: "translateY(0) skew(0deg, 0deg)"},
    out: {opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)"},
    common: {transformOrigin: "top"},
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: {opacity: 1, transform: "translateY(0) skew(0deg, 0deg)"},
    out: {opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)"},
    common: {transformOrigin: "bottom"},
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: {opacity: 1, transform: "translateY(0) rotate(0deg)"},
    out: {opacity: 0, transform: "translateY(20px) rotate(-5deg)"},
    common: {transformOrigin: "bottom"},
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: {opacity: 1, transform: "translateY(0) rotate(0deg)"},
    out: {opacity: 0, transform: "translateY(20px) rotate(5deg)"},
    common: {transformOrigin: "top"},
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: {opacity: 1, transform: "translateY(0)"},
    out: {opacity: 0, transform: "translateY(-100%)"},
    common: {transformOrigin: "top"},
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: {opacity: 1, transform: "translateY(0)"},
    out: {opacity: 0, transform: "translateY(100%)"},
    common: {transformOrigin: "bottom"},
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: {opacity: 1, transform: "translateX(0)"},
    out: {opacity: 0, transform: "translateX(100%)"},
    common: {transformOrigin: "left"},
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: {opacity: 1, transform: "translateX(0)"},
    out: {opacity: 0, transform: "translateX(-100%)"},
    common: {transformOrigin: "right"},
    transitionProperty: "transform, opacity"
  }
};

export { transitions };
//# sourceMappingURL=transitions.js.map
