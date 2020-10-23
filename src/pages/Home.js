import React, { Component } from "react";
import "../App.css";
import Editor from "../components/Editor";
import { inject, observer } from "mobx-react";

@inject('store')
@observer
class Home extends Component {
  render() {
    return (
      <Editor />
    );
  }
}

export default Home;
