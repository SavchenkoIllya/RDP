import styled from "@emotion/styled";
import { StyleConstants } from "@styles/variables";
import { IconButton } from "../IconButton";

export const DownloadIcon = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${StyleConstants.COLORS.DOWNLOAD_ICON};
  padding: 1rem 1.3rem;
  border-radius: 1rem;
  z-index: 13;
  color: ${StyleConstants.COLORS.RED};
  
  &:hover,
  :focus {
    background-color: ${StyleConstants.COLORS.DOWNLOAD_ICON_HOVERED};
  }
`;
