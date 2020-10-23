import React, { Component } from "react";
import "../App.css";
import Editor from "../components/Editor";
import Messages from "../components/Messages";
import { inject, observer } from "mobx-react";

@inject('store')
@observer
class Home extends Component {
  render() {
    return (
      <>
      <div className='width50'>
        <Editor />
      </div>
      <div className='width50'>
        <Messages />
      </div>
      </>
    );
  }
}

export default Home;
