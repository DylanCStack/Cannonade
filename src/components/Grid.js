import React from 'react';
import {Cell} from './Cell.js';

function createGrid(numRows, numCols) {
  let rows = [];
  for(let y = 0; y < numRows; y++) {
    let cols = [];
    for(let x = 0; x < numCols; x++) {
      cols.push({'x': x, 'y': y});
    }
    rows.push(cols);
  }
  return rows;
}

export class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = createGrid(this.props.x, this.props.y);
  }

  render() {
    let grid = this.grid.map((row, y) =>{
      return (<tr key={y}>
      {
        row.map((col) => {
          return (<Cell x={col.x} y={col.y} key={col.x}></Cell>)
        })
      }
      </tr>)
    });
    console.log(grid);

    return (
      <table className='grid'>
        <tbody>
          {grid}
        </tbody>
      </table>
    );
  }
}
