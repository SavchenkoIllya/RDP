/* eslint-disable jsx-a11y/alt-text */
import { useControls } from "react-zoom-pan-pinch";

const ModalImage = (props) => {
  const { resetTransform, centerView } = useControls();
  resetTransform();
  centerView(undefined, 0);

  return <img {...props} />;
};

export default ModalImage;
