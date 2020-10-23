import React from "react";
import { action, observable, computed, configure } from "mobx";
import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT + '/api'

configure({ enforceActions: 'observed' })

export default class Store {
  @observable listTokens = [];
  @observable messages = [];
 
  @action
  axiosGetTokens(){
    const this_ = this
    axios.get(`/tokens`)
    .then(function (res) {
      if (res && res.status === 200){
        this_.setListTokens(res.data.body)
      } else {
        this_.clearTokens()
      }
    })
    .catch(function (error) {
      this_.clearTokens()
    })
  }

  @action
  setListTokens(array) {
    this.listTokens = array;
  }

  @action
  clearTokens() {
    this.listTokens = []
  }

  @action
  setMessages(array) {
    this.messages = array
  }

  @action
  addToMessages(obj) {
    this.messages.push(obj)
  }

  @action
  axiosGetMessages() {
    const this_ = this
    axios.get(`/messages`)
    .then(function (res) {
      if (res && res.status === 200){
        this_.setMessages(res.data.body)
      } else {
        this_.setMessages([])
      }
    })
    .catch(function (error) {
      this_.setMessages([])
    })
  }

  @action
  axiosSaveMessages(obj) {
    const this_ = this;
    axios.post(`/messages`, obj)
    .then(function (res) {
      if (res && res.status === 200){
        this_.addToMessages({
          body: obj.body
        })
      } else {
        
      }
    })
    .catch(function (error) {
      
    })
  }
}
