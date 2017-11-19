import React, { PropTypes } from 'react';

import "./index.scss";

import Landing from "../LandingPage/Landing.jsx";
import Preview from "../PreviewPage/Preview.jsx";
import Success from "../SuccessPage/Success.jsx";

import PageHeader from '../../components/PageHeader/PageHeader.jsx';

const pageTitles = [
  "Enter",
  "wd",
  "wqd"
]

export default class Main extends React.Component{

  state = {
    fields : null,
    page : 0
  }

  previewFields = (fields) => {
    console.log(fields);
    this.setState({fields : fields, page : 1});
  }

  changePage = (p) => {
    this.setState({ page : p });
  }

  renderPage = () => {
    const { page, fields } = this.state;
    let name = fields && fields.name && fields.name.val ? fields.name.val : null;

    if(page == 0) return <Landing fields={fields} submitFields = {this.previewFields}/>
    if(page === 1) return <Preview fields={fields} changePage={this.changePage} />
    if(page === 2) return <Success name={name} />
  }

  render(){
    const { page } = this.state;

    return <div className="main">
      <div className="head-img"> <img src="img/catalyst.png"/> </div>
      {this.renderPage()}
    </div>
  }

}
