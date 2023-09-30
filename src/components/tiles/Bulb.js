import Tile from "./Tile";
import { toColorString } from "../../utils";
import { WIRE, OFF } from "../../constants";

const Bulb = ({ tileSize, bulbColor, color, state = 1 }) => {
  const dimensions =
    state === 4
      ? { width: "40", height: "16", x: "0", y: "52" }
      : state === 3
      ? { width: "16", height: "40", x: "52", y: "80" }
      : state === 2
      ? { width: "40", height: "16", x: "80", y: "52" }
      : { width: "16", height: "40", x: "52", y: "0" };

  const glow = bulbColor === color ? { filter: "url(#glow)" } : {};

  return (
    <Tile size={tileSize}>
      <defs>
        <filter id="glow" width="300%" height="300%" x="-75%" y="-75%">
          <feMorphology
            operator="dilate"
            radius="3"
            in="sourceAlpha"
            result="thicken"
          />
          <feGaussianBlur in="thicken" stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        {...dimensions}
        fill={Number.isInteger(color) ? toColorString(color) : WIRE}
      />
      <circle
        cx="60.5"
        cy="60.5"
        r="25"
        fill={toColorString(bulbColor)}
        {...glow}
      />
      {bulbColor !== color && (
        <circle cx="60.5" cy="60.5" r="17.5" fill={OFF} />
      )}
    </Tile>
  );
};

export default Bulb;
