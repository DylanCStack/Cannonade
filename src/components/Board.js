import React from 'react';
import {Grid} from './Grid.js';

export class Board extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const dimensions = 20;
    return(
      <div className='board'>
        <Grid x={dimensions} y={dimensions}/>
      </div>
    );
  }
}
