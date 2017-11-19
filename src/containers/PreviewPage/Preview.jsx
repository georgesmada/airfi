import React from 'react';

import "./index.scss";

import PageHeader from "../../components/PageHeader/PageHeader.jsx";

export default class Preview extends React.Component{

   renderField = (label, val) => {
     return <div className="txtInput preview-field">
       <div className="txt-label">{label}</div>
       <div className="preview-val">{val}</div>
     </div>
   }

  render(){
    const { fields, changePage } = this.props;

    const { name, phone, email, userType } = fields;

    const userVal = userType.val == 0 ? "Airfi Employee" : "Guest";

    return <div className="preview box">
      <PageHeader num={2} title="Confirm Your Details"/>
      {this.renderField("NAME", name.val)}
      {this.renderField("PHONE NUMBER", phone.val)}
      {this.renderField("EMAIL ADDRESS", email.val)}
      {this.renderField("USER TYPE", userVal)}
      <div className="box-btns">
        <div className="box-btn btn-0"><div onClick={() => changePage(0)}>Change Details</div></div>
        <div className="box-btn btn-1"><div onClick={() => changePage(2)}>Submit</div></div>
      </div>
    </div>
  }

}
