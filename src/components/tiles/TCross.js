import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE } from "../../constants";

const TCross = ({ tileSize, color, state = 1 }) => {
  const path =
    state === 4
      ? "M 52 0 L 68 0 68 52 120 52 120 68 0 68 0 52 52 52"
      : state === 3
      ? "M 52 0 L 68 0 68 120 52 120 52 68 0 68 0 52 52 52"
      : state === 2
      ? "M 0 52 L 120 52 120 68 68 68 68 120 52 120 52 68 0 68"
      : "M 52 0 L 68 0 68 52 120 52 120 68 68 68 68 120 52 120";

  return (
    <Tile size={tileSize}>
      <path d={path} fill={color ? toColorString(color) : WIRE} />
    </Tile>
  );
};

export default TCross;
