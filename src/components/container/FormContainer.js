import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import imgs from "./../../assets/images/mothinglove.jpeg"; //iport方式引入图片可行
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <img src={imgs} alt=""/>
      </form>
    );
  }
}
export default FormContainer;