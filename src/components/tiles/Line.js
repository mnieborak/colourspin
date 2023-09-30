import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE } from "../../constants";

const Line = ({ tileSize, color, state = 1 }) => {
  const dimensions =
    state === 2
      ? { width: "120", height: "16", x: "0", y: "52" }
      : { width: "16", height: "120", x: "52", y: "0" };

  return (
    <Tile size={tileSize}>
      <rect {...dimensions} fill={color ? toColorString(color) : WIRE} />
    </Tile>
  );
};

export default Line;
