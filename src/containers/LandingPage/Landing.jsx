import React from 'react';
import {validate} from 'email-validator';

import "./index.scss";

import TextInput from '../../components/TextInput/TextInput.jsx';
import Selection from '../../components/Selection/Selection.jsx';
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

export default class Landing extends React.Component{

  state = {
    name : {val: "", status: null},
    phone : {val: "", status: null},
    email : {val: "", status: null},
    userType : {val : 0}
  }

  componentDidMount(){
    if(this.props.fields){
      this.setState(this.props.fields);
    }
  }

  inputName = (val) => {
    const expr = new RegExp('^[a-zA-Z \']*$', 'i');
    if(!expr.test(val))
      this.setState({name : {status : "only letters allowed", val : this.state.name.val}});
    else {

      this.setState({name : {val : val, status : null}})
    }
  }

  inputPhone = (val) => {
    const expr = new RegExp(`^[0-9 ]*$`, 'gm')
    if(!expr.test(val))
      this.setState({phone : {status : "please enter a valid number", val : this.state.phone.val}});
    else {
      this.setState({phone : {val : val, status : null}})
    }
  }

  inputMail = (val) => {
    this.setState({email : {val:val, status:null}});
  }

  inputUserType = (val) => {
    console.log(val);
    this.setState({userType : {val:val}});
  }

  unfocusMail = () => {
    let val = this.state.email.val;
    val = val.trim();

    let status = null;

    console.log(val);
    console.log(validate(val));

    if(val.length == 0) status = "please enter an email address";
    else if(!validate(val)) status = "invalid email address";

    this.setState({email : {val:val, status:status}});
  }

  unfocusName = () => {
    let val = this.state.name.val;
    val = val.trim();
    let arr = val.split(/\s+/g);
    for(let i=0; i < arr.length; i++){
      if(arr[i].length > 0)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    val = arr.join(" ");

    let status = null;
    if(val.length == 0) status = "please enter a name";

    this.setState({name : {val:val, status:status}});
  }

  unfocusPhone = () => {
    let val = this.state.phone.val;
    val = val.trim();
    val = val.replace(/\s/g, '');
    let status = null;

    if(val.length > 15) status = "the number is too long";
    else if(val.length == 0) status = "please enter a number";

    val = val.length > 4 ? val.slice(0, 4) + " " + val.slice(4, val.length) : val;
    this.setState({phone : {val:val, status:status}});
  }

  handleSubmit = () => {
    const { name, phone, email } = this.state;
    let ok = true;
    if(name.status || phone.status || email.status) ok = false;
    else if(name.val.length == 0 || phone.val.length == 0 || email.val.length == 0){
      this.setState({name:{val: "", status : "please enter a name"}});
      this.setState({phone:{val: "", status : "please enter a phone number"}});
      this.setState({email:{val: "", status : "please enter an email address"}});
      ok = false;
    }
    if(ok) this.props.submitFields(this.state)
  }

  render(){
    const { name, phone, email, userType } = this.state;
    return <div className="landing box">
      <PageHeader num={1} title="Enter Your Personal Details"/>
      <TextInput label="NAME" val={name.val} handleChange={this.inputName} status={name.status} handleUnfocus={this.unfocusName}/>
      <TextInput label="PHONE NUMBER" val={phone.val} handleChange={this.inputPhone} status={phone.status} handleUnfocus={this.unfocusPhone}/>
      <TextInput label="EMAIL ADDRESS" val={email.val} handleChange={this.inputMail} handleUnfocus={this.unfocusMail} status={email.status}/>
      <Selection label="USER TYPE" val={userType.val} handleClick={this.inputUserType}/>
      <div className="box-btns">
        <div className="box-btn btn-0"></div>
        <div className="box-btn btn-1"><div onClick={this.handleSubmit}>Submit</div></div>
      </div>
    </div>
  }

}
