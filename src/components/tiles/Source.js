import Tile from "./Tile";
import { toColorString } from "../../utils";

const Source = ({
  tileSize,
  color,
  exitUp = false,
  exitRight = false,
  exitDown = false,
  exitLeft = false,
}) => (
  <Tile size={tileSize}>
    <rect width="40" height="40" x="40" y="40" fill={toColorString(color)} />
    {exitUp && (
      <rect
        width="16"
        height="38"
        x="52"
        y="0"
        fill={
          Number.isInteger(exitUp)
            ? toColorString(exitUp)
            : toColorString(color)
        }
      />
    )}
    {exitRight && (
      <rect
        width="38"
        height="16"
        x="82"
        y="52"
        fill={
          Number.isInteger(exitRight)
            ? toColorString(exitRight)
            : toColorString(color)
        }
      />
    )}
    {exitDown && (
      <rect
        width="16"
        height="38"
        x="52"
        y="82"
        fill={
          Number.isInteger(exitDown)
            ? toColorString(exitDown)
            : toColorString(color)
        }
      />
    )}
    {exitLeft && (
      <rect
        width="38"
        height="16"
        x="0"
        y="52"
        fill={
          Number.isInteger(exitLeft)
            ? toColorString(exitLeft)
            : toColorString(color)
        }
      />
    )}
  </Tile>
);

export default Source;
