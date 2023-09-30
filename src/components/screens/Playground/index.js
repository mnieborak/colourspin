import {
  Source,
  Line,
  Bulb,
  Cross,
  Turn,
  TCross,
  TwoTurns,
  Overpass,
} from "../../tiles";
import {
  RED,
  GREEN,
  BLUE,
  YELLOW,
  CYAN,
  MAGENTA,
  WHITE,
} from "../../../constants";

const tileSize = "120px";

function Playground() {
  return (
    <div>
      <p>Testing elements:</p>
      <Source color={RED} tileSize={tileSize} exitRight />
      <Line tileSize={tileSize} color={RED} state={2} />
      <Bulb tileSize={tileSize} bulbColor={RED} color={RED} state={4} />
      <Turn tileSize={tileSize} color={WHITE} state={2} />
      <Cross tileSize={tileSize} color={WHITE} />
      <Turn tileSize={tileSize} color={WHITE} state={4} />
      <TCross tileSize={tileSize} state={3} color={YELLOW} />
      <TwoTurns tileSize={tileSize} state={2} color1={MAGENTA} color2={CYAN} />
      <Bulb tileSize={tileSize} bulbColor={GREEN} color={BLUE} state={2} />
      <Source tileSize={tileSize} color={BLUE} exitLeft />
      <Overpass tileSize={tileSize} state={2} color2={CYAN} />
      <Overpass tileSize={tileSize} color2={CYAN} />
    </div>
  );
}

export default Playground;
