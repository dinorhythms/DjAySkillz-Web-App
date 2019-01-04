import React, { Component } from 'react'

import Clients from '../clients/Clients';
import Sidebar from './Sidebar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row pt-4">
        <div className="col-md-10">
            <Clients />
        </div>
        <div className="col-md-2">
            <Sidebar />
        </div>
      </div>
    )
  }
}
