export interface SignProps {
  /**
   * textContent is the text that will be displayed on the sign.
   */
  textContent: string;

  /**
   * borderColor is the color sign.
   */
  borderColor: string;

  /**
   * parallaxSpeed is the rate at which the sign moves as the user scrolls.
   */
  parallaxSpeed: number;

  /**
   * flickerDelay is the `animation-delay` of the flicker animation in seconds.
   */
  flickerDelay?: number;

  /**
   * zIndex is the `z-index` of the sign.
   */
  zIndex?: number;

  /**
   * top is the `top` CSS property of the sign.
   */
  top?: string;

  /**
   * right is the `right` CSS property of the sign.
   */
  right?: string;

  /**
   * bottom is the `bottom` CSS property of the sign.
   */
  bottom?: string;

  /**
   * left is the `left` CSS property of the sign.
   */
  left?: string;
}

export const SIGNS: SignProps[] = [
  // Left side.
  {
    textContent: "Welcome",
    borderColor: "#4F96B9",
    parallaxSpeed: 50,
    top: "15vh",
    left: "2vw"
  },
  {
    textContent: "優待",
    borderColor: "#932B8E",
    parallaxSpeed: 60,
    flickerDelay: 0.5,
    top: "18vh",
    left: "8vw"
  },
  {
    textContent: "Hacks",
    borderColor: "#9581AA",
    parallaxSpeed: 55,
    flickerDelay: 1,
    top: "26vh",
    left: "9vw"
  },
  {
    textContent: "たたき切る",
    borderColor: "#7A9FFF",
    parallaxSpeed: 20,
    flickerDelay: 1.5,
    top: "50vh",
    left: "3vw"
  },
  {
    textContent: "優待",
    borderColor: "#9581AA",
    parallaxSpeed: 30,
    flickerDelay: 2,
    top: "52vh",
    left: "11vw"
  },
  {
    textContent: "Fully",
    borderColor: "#6CCAFF",
    parallaxSpeed: 42,
    flickerDelay: 2.5,
    top: "60vh",
    left: "7vw"
  },
  {
    textContent: "ACM",
    borderColor: "#FC61FF",
    parallaxSpeed: 54,
    flickerDelay: 3,
    top: "56vh",
    left: "-2vw"
  },
  // Right side.
  {
    textContent: "ACM",
    borderColor: "#FC61FF",
    parallaxSpeed: 50,
    top: "15vh",
    right: "2vw"
  },
  {
    textContent: "たたき切る",
    borderColor: "#9EAEFF",
    parallaxSpeed: 60,
    flickerDelay: 0.5,
    top: "18vh",
    right: "8vw"
  },
  {
    textContent: "Fully",
    borderColor: "#6CCAFF",
    parallaxSpeed: 55,
    flickerDelay: 1,
    top: "36vh",
    right: "9vw"
  },
  {
    textContent: "Hacks",
    borderColor: "#9581AA",
    parallaxSpeed: 20,
    flickerDelay: 1.5,
    top: "39vh",
    right: "3vw"
  },
  {
    textContent: "ACM",
    borderColor: "#FC61FF",
    parallaxSpeed: 30,
    flickerDelay: 2,
    top: "57vh",
    right: "5vw"
  },
  {
    textContent: "優待",
    borderColor: "#9EAEFF",
    parallaxSpeed: 22,
    flickerDelay: 0.5,
    top: "65vh",
    right: "12vw"
  },
  {
    textContent: "Fully",
    borderColor: "#6CCAFF",
    parallaxSpeed: 42,
    flickerDelay: 2.5,
    top: "70vh",
    right: "7vw"
  },
  {
    textContent: "ACM",
    borderColor: "#9EAEFF",
    parallaxSpeed: 54,
    flickerDelay: 3,
    top: "72vh",
    right: "2vw"
  }
];
