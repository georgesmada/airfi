import React from 'react';

import "./index.scss";

export default class Selection extends React.Component{

  state = {
    val : ""
  }

  handleClick = (ind) => () => this.props.handleClick(ind);

  renderButtons = (val) => {
    const btns = ["Airfi Employee", "Guest"];

    return btns.map((b,i) => {
      return (
        <div className="btn" onClick = {this.handleClick(i)}>
          <div className="btn-select">{ val===i ? <div></div> : null }</div>
          <div className="btn-label">{b}</div>
        </div>
      )
    })
  }

  render(){

    const { label, val } = this.props;

    return <div className="selection">
      <div className="txt-label">{label}</div>
      {this.renderButtons(val)}
    </div>
  }

}
