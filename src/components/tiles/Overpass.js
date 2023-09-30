import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE } from "../../constants";

const Overpass = ({ tileSize, color1, color2, state = 1 }) => {
  if (state === 2) {
    return (
      <Tile size={tileSize}>
        <rect
          width="16"
          height="48"
          x="52"
          y="0"
          fill={color1 ? toColorString(color1) : WIRE}
        />
        <rect
          width="16"
          height="48"
          x="52"
          y="72"
          fill={color1 ? toColorString(color1) : WIRE}
        />
        <rect
          width="120"
          height="16"
          x="0"
          y="52"
          fill={color2 ? toColorString(color2) : WIRE}
        />
      </Tile>
    );
  } else {
    return (
      <Tile size={tileSize}>
        <rect
          width="48"
          height="16"
          x="0"
          y="52"
          fill={color2 ? toColorString(color2) : WIRE}
        />
        <rect
          width="48"
          height="16"
          x="72"
          y="52"
          fill={color2 ? toColorString(color2) : WIRE}
        />
        <rect
          width="16"
          height="120"
          x="52"
          y="0"
          fill={color1 ? toColorString(color1) : WIRE}
        />
      </Tile>
    );
  }
};

export default Overpass;
