import React, { Component } from "react";
import "../App.css";
import { observer } from "mobx-react";
import { withStore } from "../services/store";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// const tokens = {
//   "company.companyInfo.companyName": {
//     "name": "Company Name"
//   },
//   "company.companyInfo.companyPhone": {
//     "name": "Company Phone"
//   },
//   "company.companyInfo.companyEmail": {
//     "name": "Company Email"
//   },
//   "company.companyInfo.companySite": {
//     "name": "Company Site (url)"
//   },
//   "company.companyInfo.companyAutologin": {
//     "name": "Autologin"
//   },
//   "company.companyInfo.companyAdminAutologin": {
//     "name": "Manager autologin"
//   },
//   "company.companyLogoUrl": {
//     "name": "Company Logo Url"
//   },
//   "request.deliveryAddress": {
//     "name": "Delivery address"
//   },
//   "request.deliveryAddress.apt": {
//     "name": "Delivery apt"
//   },
//   "request.pickupAddress": {
//     "name": "Pickup address"
//   },
//   "request.pickupAddress.apt": {
//     "name": "Pickup apt"
//   },
//   "request.deliveryTimeWindow": {
//     "name": "Delivery time window"
//   },
//   "request.pickupTimeWindow": {
//     "name": "Pickup time window"
//   },
//   "request.packageOverview": {
//     "name": "Package overview"
//   },
//   "request.taxes": {
//     "name": "Taxes overview"
//   },
//   "request.additionalOverview": {
//     "name": "Additional Overview"
//   },
//   "request.servicesOverview": {
//     "name": "Services Overview"
//   },
//   "request.receiptsDetails": {
//     "name": "Receipts details"
//   },
//   "request.client.email": {
//     "name": "Client Email"
//   },
//   "request.client.phone": {
//     "name": "Client Phone Number"
//   },
//   "request.manager.email": {
//     "name": "Manager full name"
//   },
//   "request.client.fullName": {
//     "name": "Client full name"
//   },
//   "request.client.firstName": {
//     "name": "Client first name"
//   },
//   "request.client.newPassword": {
//     "name": "New password for restore"
//   },
//   "request.pickupDate": {
//     "name": "Pickup date"
//   },
//   "request.pickupDateMonth": {
//     "name": "Pickup date (month)"
//   },
//   "request.pickupDateDay": {
//     "name": "Pickup date (Day)"
//   },
//   "request.deliveryDate": {
//     "name": "Delivery date"
//   },
//   "request.deliveryDateMonth": {
//     "name": "Delivery date (month)"
//   },
//   "request.deliveryDateDay": {
//     "name": "Delivery date (Day)"
//   },
//   "request.packages.mainPackage.basicUsage": {
//     "name": "Main Package Total"
//   },
//   "request.packages.additionalTotal": {
//     "name": "Package Additionals"
//   },
//   "request.services.total": {
//     "name": "Extra Services total"
//   },
//   "request.discount.total": {
//     "name": "Discount total"
//   },
//   "request.discountTable": {
//     "name": "Discount Table"
//   },
//   "request.grandTotal": {
//     "name": "Grand Total Table"
//   },
//   "request.totalWithDiscount": {
//     "name": "Total with discount"
//   },
//   "request.payments": {
//     "name": "Request payments"
//   },
//   "request.refunds": {
//     "name": "Request refunds"
//   },
//   "request.id": {
//     "name": "Request id"
//   },
//   "message.body": {
//     "name": "Message body"
//   },
//   "statistic.lastYearsRequests": {
//     "name": "Request count from last year"
//   },
//   "statistic.currentYearRequests": {
//     "name": "Request count from current year"
//   },
//   "statistic.lastYearReceipts.total": {
//     "name": "Request receipts from last year"
//   },
//   "statistic.currentYearReceipts.total": {
//     "name": "Request receipts from current year"
//   },
//   "statistic.requestsCountDiff": {
//     "name": "Difference between requests count"
//   },
//   "statistic.receiptsTotalDiff": {
//     "name": "Difference between receipts total"
//   }
// }

function tokens (args) {
  const value = args[0];
  
  const cursorPosition = this.quill.getSelection().index
  this.quill.insertText(cursorPosition, value)
  this.quill.setSelection(cursorPosition + value.length)
}

const CustomToolbar = () => (
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
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
)


class Editor extends Component {
  state ={
    value: ''
  }

  setValue = (value) => {
    this.setState({
      value
    })
  }

  componentDidMount() {
    customDropDown('Tokens');
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <CustomToolbar />
        <ReactQuill 
          theme="snow" 
          value={value}
          modules={Editor.modules}
          onChange={this.setValue}
          placeholder={'write here'}
          formats={Editor.formats}
          />
        <div>
          <div className='button' onClick={this.handleSubmit}>Submit</div>
        </div>
      </>
    );
  }
}

Editor.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      "Tokens": tokens
    }
  }
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
]

function customDropDown(title){
  const placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll(`.ql-${title} .ql-picker-item`));

  placeholderPickerItems.forEach((item) => { 
    // console.log(item.getAttribute('data-label'))
    // data-value
    item.textContent = item.getAttribute('data-label')
  });

  document.querySelector(`.ql-${title} .ql-picker-label`).style.marginRight = "36px";
  
  document.querySelector(`.ql-${title} .ql-picker-label`).innerHTML
      = title + document.querySelector(`.ql-${title} .ql-picker-label`).innerHTML;
}

export default Editor;
