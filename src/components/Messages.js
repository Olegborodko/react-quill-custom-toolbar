import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject('store')
@observer
class Messages extends Component {
  componentDidMount(){
    this.props.store.axiosGetMessages();
  }

  render() {

    return (
      <>
        {this.props.store.messages.map((el, index) => {
          return <div key={index}
          dangerouslySetInnerHTML={{ __html: el.body }}
          > 
          </div>
        })}
      </>
    );
  }
}

export default Messages;
