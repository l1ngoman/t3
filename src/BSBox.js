import React, { Component } from 'react';
import './App.css'

class BSBox extends Component {
  render() {
    return (
      <div className="BSBox" onClick={this.handleClick}>
        {this.props.show}
      </div>
    );
  }

  handleClick = () => {
    this.props.handleClickParent(this.props.id)

  }
}

export default BSBox;
