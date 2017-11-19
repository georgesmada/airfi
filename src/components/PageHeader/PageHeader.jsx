import React from 'react';
import PropTypes from 'prop-types';

import "./index.scss";

export default class PageHeader extends React.Component{

  static propTypes = {
    num : PropTypes.number,
    title : PropTypes.string
   }

  render(){

    const { num, title } = this.props;

    return <div className="pageHeader">
      <div>{num}</div>
      <span>{title}</span>
    </div>
  }

}
