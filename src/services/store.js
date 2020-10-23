import React from "react";
import { action, observable, computed, configure } from "mobx";
import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT + '/api'

configure({ enforceActions: 'observed' })

export default class Store {
  @observable listTokens = [];

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
}
