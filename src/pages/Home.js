import React, { Component } from "react";
import "../App.css";
import { observer } from "mobx-react";
import { withStore } from "../services/store";
import Editor from "../components/Editor";

@withStore
@observer
class Home extends Component {
  render() {
    return (
      <Editor/>
    );
  }
}

export default Home;
