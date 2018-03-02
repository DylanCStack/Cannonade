import React from 'react';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.takeAction = this.props.takeAction;
  }

  handleClick(e) {
    this.takeAction(this.props.y, this.props.x);
  }

  render() {
    let inactive = this.props.hit ? 'inactive' : '';
    let empty = this.props.empty ? '' : 'filled';
    let node = this.props.node ? 'node' : '';
    let style = `cell ${inactive} ${empty} ${node}`;

    return <td className={style} onClick={this.handleClick}></td>;
  }
}
