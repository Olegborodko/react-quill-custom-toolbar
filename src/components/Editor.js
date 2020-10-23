import React, { Component } from "react";
import "../App.css";
import { inject, observer } from "mobx-react";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';

@inject('store')
@observer
class Editor extends Component {
  state ={
    value: '',
    componentReady: true
  }

  modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        "Tokens": tokens
      }
    }
  }

  formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color',
  ]

  setValue = (value) => {
    this.setState({
      value
    })
  }

  componentDidMount() {
    this.props.store.axiosGetTokens();
  }

  componentDidUpdate() {
    if (this.props.store.listTokens.length>0 && this.state.componentReady) {
      customDropDown('Tokens')
      this.setState({
        componentReady: false
      })
    }
  }

  render() {
    const { value } = this.state;
    const { store } = this.props;

    return (
      <>
        {store.listTokens.length>0 ?
        <>
        <CustomToolbar tokens={store.listTokens} />
        <ReactQuill 
          theme="snow" 
          value={value}
          modules={this.modules}
          onChange={this.setValue}
          placeholder={'write here'}
          formats={this.formats}
        />
         <div>
          <div className='button' onClick={this.handleSubmit}>Submit</div>
        </div>
        </> : <></> 
        }
      </>
    );
  }
}

function customDropDown(title){
  const placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll(`.ql-${title} .ql-picker-item`));

  placeholderPickerItems.forEach((item) => { 
    console.log(item)
    // console.log(item.getAttribute('data-label'))
    // data-value
    item.textContent = item.getAttribute('data-label')
  });

  document.querySelector(`.ql-${title} .ql-picker-label`).style.marginRight = "36px";
  
  document.querySelector(`.ql-${title} .ql-picker-label`).innerHTML
      = title + document.querySelector(`.ql-${title} .ql-picker-label`).innerHTML;
}

function tokens (args) {
  const value = args;
  
  const cursorPosition = this.quill.getSelection().index
  this.quill.insertText(cursorPosition, value)
  this.quill.setSelection(cursorPosition + value.length)
}

class CustomToolbar extends Component {
  render() {
    return(
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
      <option value="5"></option>
      <option defaultValue></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-image"></button>
    <select className="ql-align">
      <option defaultValue></option>
      <option className="ql-align" value="center"></option>
      <option className="ql-align" value="right"></option>
      <option className="ql-align" value="justify"></option>
    </select>
    <select className="ql-background">
      <option defaultValue></option>
      <option className="ql-picker-options" value="red"></option>
      <option className="ql-picker-options" value="green"></option>
      <option className="ql-picker-options" value="blue"></option>
      <option className="ql-picker-options" value="orange"></option>
      <option className="ql-picker-options" value="violet"></option>
      <option className="ql-picker-options" value="#000000"></option>
    </select>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option defaultValue></option>
    </select>
    <button className="ql-link"></button>
    <button className="ql-clean"></button>
    <select className="ql-Tokens">
    {this.props.tokens.map((el, index) => {
        return <option value={el.tag} key={el.id}>{el.title}</option>
    })}
    </select>
  </div>);
  }
}

export default Editor;
