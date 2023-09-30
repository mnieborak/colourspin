import { BULB, SOURCE, TURN, RED } from "../constants";

export const gridState = {
  size: 2,
  cells: [
    { key: "00", type: BULB, bulbColor: RED, color: RED, state: 2 },
    { key: "10", type: TURN, color: RED, state: 3 },
    { key: "01", type: BULB, bulbColor: RED, color: RED, state: 2 },
    { key: "11", type: SOURCE, color: RED, exitUp: RED, exitLeft: true },
  ],
};
