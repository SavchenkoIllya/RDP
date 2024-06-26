import styled from "styled-components";
import { StyleConstants } from "@styles/variables";
import { motion } from "framer-motion";

export const ModalFullScreenWrapper = styled(motion.section)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 50;
`;

export const ModalContentWrapper = styled(motion.div)`
  width: fit-content;
  background-color: ${StyleConstants.DARK_BG};
  border-radius: 15px;
  overflow: scroll;
  box-shadow: ${StyleConstants.BOX_SHADOW};
`;
