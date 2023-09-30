import Cell from "./Cell";

const GRID_SIDE_LENGTH = 600;

const Grid = ({ size, cells }) => {
  const tileSize = `${GRID_SIDE_LENGTH / size}px`;
  const gridStyle = {
    width: `${GRID_SIDE_LENGTH}px`,
    height: `${GRID_SIDE_LENGTH}px`,
    display: "grid",
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };
  return (
    <div style={gridStyle}>
      {cells.map(({ key, ...props }) => (
        <Cell key={key} tileSize={tileSize} {...props} />
      ))}
    </div>
  );
};

export default Grid;
