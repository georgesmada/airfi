import React from 'react';
import PropTypes from 'prop-types';

import "./index.scss";

export default class TextInput extends React.Component{

  static propTypes = {
      label : PropTypes.string,
      val : PropTypes.string,
      handleChange : PropTypes.func
   }

  state = {
    val : ""
  }

  handleChange = (e) => {
    this.props.handleChange(e.target.value)
  }

  handleBlur = () => {
    this.props.handleUnfocus();
  }

  render(){
    const { label, handleChange, val, status } = this.props;

    return <div className="textInput">
      <div className="txt-label">{label}</div>
      <input type="text" value={val} onChange={this.handleChange} onBlur={this.handleBlur}/>
      <div className="txt-status">{status}</div>
    </div>
  }

}
