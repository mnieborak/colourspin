import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE } from "../../constants";

const Turn = ({ tileSize, color, state = 1 }) => {
  const path =
    state === 4
      ? "M 52 0 L 68 0 Q 68 68 0 68 L 0 52 Q 52 52 52 0"
      : state === 3
      ? "M 0 52 Q 68 52 68 120 L 52 120 Q 52 68 0 68 L 0 68"
      : state === 2
      ? "M 120 52 L 120 68 Q 68 68 68 120 L 52 120 Q 52 52 120 52"
      : "M 52 0 L 68 0 Q 68 52 120 52 L 120 68 Q 52 68 52 0";

  return (
    <Tile size={tileSize}>
      <path d={path} fill={color ? toColorString(color) : WIRE} />
    </Tile>
  );
};

export default Turn;
