import React, { Component } from "react";
import "../App.css";
import Username from "../components/Username";
import { observer } from "mobx-react";
import { withStore } from "../services/store";

@withStore
@observer
class Home extends Component {
  toggleTitle = () => {
    const { store } = this.props;
    if (store.title === "Coding is Love") {
      store.setTitle("Mobx React Context");
    } else {
      store.setTitle("Coding is Love");
    }
  };

  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://codingislove.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {store.title}
          </a>
          <button onClick={this.toggleTitle} style={{ margin: 20 }}>
            Toggle title
          </button>
          <Username />
        </header>
      </div>
    );
  }
}

export default Home;
