import { Grid } from "../../ui";
import { gridState } from "../../../hooks";

function Playground() {
  return <Grid {...gridState} />;
}

export default Playground;
