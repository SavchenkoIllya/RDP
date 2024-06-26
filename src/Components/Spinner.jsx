import { Oval } from "react-loader-spinner";
import { StyleConstants } from "@styles/variables";

export const Spiner = () => {
  return (
    <Oval
      height={StyleConstants.SPINNER.SIZE}
      width={StyleConstants.SPINNER.SIZE}
      color={StyleConstants.COLORS.RED}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={StyleConstants.COLORS.WHITE}
      strokeWidth={StyleConstants.SPINNER.STROKE}
      strokeWidthSecondary={StyleConstants.SPINNER.STROKE}
    />
  );
};
