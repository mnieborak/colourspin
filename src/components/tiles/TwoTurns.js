import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE } from "../../constants";

const TwoTurns = ({ tileSize, color1, color2, state = 1 }) => {
  if (state === 2) {
    return (
      <Tile size={tileSize}>
        <path
          d="M 52 0 L 68 0 Q 68 68 0 68 L 0 52 Q 52 52 52 0"
          fill={color1 ? toColorString(color1) : WIRE}
        />
        <path
          d="M 120 52 L 120 68 Q 68 68 68 120 L 52 120 Q 52 52 120 52"
          fill={color2 ? toColorString(color2) : WIRE}
        />
      </Tile>
    );
  } else {
    return (
      <Tile size={tileSize}>
        <path
          d="M 52 0 L 68 0 Q 68 52 120 52 L 120 68 Q 52 68 52 0"
          fill={color1 ? toColorString(color1) : WIRE}
        />
        <path
          d="M 0 52 Q 68 52 68 120 L 52 120 Q 52 68 0 68 L 0 68"
          fill={color2 ? toColorString(color2) : WIRE}
        />
      </Tile>
    );
  }
};

export default TwoTurns;
