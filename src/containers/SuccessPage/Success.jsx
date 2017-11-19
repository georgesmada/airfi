import React from 'react';

import "./index.scss";

export default class Success extends React.Component{

  render(){
    const { name } = this.props;

    let message = "Welcome";
    if(name) message += " " + name + ".";

    return <div className="success box">
      <div className="success-title">
        Success !
      </div>
      <div className="success-msg">{message}</div>
    </div>
  }

}
