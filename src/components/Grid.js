import React from 'react';
import {Cell} from './Cell.js';



export class Grid extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let grid = this.props.matrix.map((row, y) =>{
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
