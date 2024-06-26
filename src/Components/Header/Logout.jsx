// import { IconWrapper } from "../IconWrapper";

import { IoMdLogIn } from "react-icons/io";
import { IconButton } from "@pages/Details/Components/Carousel/IconButton";
import { StyleConstants } from "@styles/variables";
import { useState } from "react";

export const Logout = ({ size = 25, color = "white", scale = 2, ...props }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <IconButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: size + scale }}
      {...props}
    >
      <IoMdLogIn
        color={hovered ? StyleConstants.COLORS.RED : color}
        size={hovered ? size + scale : size}
      />
    </IconButton>
  );
};
