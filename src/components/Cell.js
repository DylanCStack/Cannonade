import React from 'react';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      hit: false,
    }
  }
  handleClick(e) {
    if(!this.state.hit){
      this.setState({hit: true})
      console.log(`Hit: ${this.props.x}, ${this.props.y}`);
    }
  }

  render() {
    let style = ['cell', this.state.hit && 'inactive'].join(' ');
    return <td className={style} onClick={this.handleClick}></td>
  }
}
