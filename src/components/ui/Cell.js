import {
  BULB,
  CROSS,
  LINE,
  OVERPASS,
  SOURCE,
  TCROSS,
  TURN,
  TWO_TURNS,
} from "../../constants";
import {
  Bulb,
  Cross,
  Line,
  Overpass,
  Source,
  TCross,
  Turn,
  TwoTurns,
} from "../tiles";

const Cell = ({ tileSize, type, ...props }) => {
  switch (type) {
    case SOURCE:
      return <Source tileSize={tileSize} {...props} />;
    case LINE:
      return <Line tileSize={tileSize} {...props} />;
    case TURN:
      return <Turn tileSize={tileSize} {...props} />;
    case CROSS:
      return <Cross tileSize={tileSize} {...props} />;
    case TCROSS:
      return <TCross tileSize={tileSize} {...props} />;
    case OVERPASS:
      return <Overpass tileSize={tileSize} {...props} />;
    case TWO_TURNS:
      return <TwoTurns tileSize={tileSize} {...props} />;
    case BULB:
      return <Bulb tileSize={tileSize} {...props} />;
    default:
      return null;
  }
};

export default Cell;
