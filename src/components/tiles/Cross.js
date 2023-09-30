import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE } from "../../constants";

const Cross = ({ tileSize, color }) => (
  <Tile size={tileSize}>
    <rect
      width="16"
      height="120"
      x="52"
      y="0"
      fill={color ? toColorString(color) : WIRE}
    />
    <rect
      width="120"
      height="16"
      x="0"
      y="52"
      fill={color ? toColorString(color) : WIRE}
    />
    <circle
      cx="60.5"
      cy="60.5"
      r="23"
      fill={color ? toColorString(color) : WIRE}
    />
    <circle cx="60.5" cy="60.5" r="7.5" fill="#000000" />
  </Tile>
);

export default Cross;
