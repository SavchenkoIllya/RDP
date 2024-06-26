export const StyleConstants = {
  COLORS: {
    BLACK: "#191919",
    LIGHT_DARK: "#121212",
    WHITE: "#ffffff",
    RED: "#c40710",
    RED_OPACITY: "#c4071177",
    LINE_COLOR:
      "radial-gradient(40% 50% at 50% 50%, #c40710 0%, rgba(162, 35, 35, 0) 100%)",
    DOWNLOAD_ICON: "rgba(255, 255, 255, 0.5)",
    DOWNLOAD_ICON_HOVERED: "rgba(255, 255, 255, 0.8)",
  },
  TEXT_SIZE: {
    MAIN: "14px",
    HEADING: "2rem",
  },
  FAST_ANIMATION: 0.5,
  VERY_FAST_ANIMATION: 0.25,
  TRANSITION_SCREEN_ANIMATION: 1.25,
  SPINNER: {
    SIZE: 80,
    STROKE: 2,
  },
};

export const Mixins = {
  LINE: `
  content: "";
  z-index: 100;
  display: block;
  margin-top: 1rem;
  width: 100%;
  height: 3px;
  background: radial-gradient(
    40% 50% at 50% 50%,
    ${StyleConstants.COLORS.RED} 0%,
    rgba(162, 35, 35, 0) 100%
  );
  `,
  BUTTON: `
  padding: 1rem 2rem;
  border: none;
  min-width: 150px;
  background-color: ${StyleConstants.COLORS.RED};
  border-radius: 5px;
  box-shadow: 0px 0px 30px ${StyleConstants.COLORS.RED};
  color: ${StyleConstants.COLORS.WHITE};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
  margin-left: -4px;
  outline: 0;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  vertical-align: bottom;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -html-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    background: ${StyleConstants.COLORS.WHITE};
    color: ${StyleConstants.COLORS.RED};
    box-shadow: none;
  }

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    min-height: 55px;
    line-height: 55px;
    min-width: 150px;
  }
  `,
};
