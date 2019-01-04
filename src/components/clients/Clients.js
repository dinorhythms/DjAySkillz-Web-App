import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
// import PropTypes from 'react';
import Spinner from '../layouts/Spinner';

class Clients extends Component {

    state = {
        totalOwed: null
    };

    static getDerivedStateFromProps(props, state){

        const { clients } = props;

        if(clients){
            //Add Balance
            const total = clients.reduce((total, client)=>{
                return total + parseFloat(client.balance.toString());
            },0);

            return {totalOwed: total};
        }
        return null;
    }

  render() {

    const { clients } = this.props;
    const { totalOwed } = this.state;

    if (clients) {
        return (
            <div>
                <div className="row">
                  <div className="col-md-6">
                      <h2>
                          <i className="fa fa-users" aria-hidden="true"></i> Clients
                      </h2>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-right text-secondary">
                        Total Owed{' '} 
                        <span className="text-info">${parseFloat(totalOwed).toFixed(2)}</span>
                    </h5>         
                  </div>
                </div>

                <table className="table table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => {
                                return (
                                    <tr key={client.id}>
                                        <td>{client.firstName} {client.lastName}</td>
                                        <td>{client.email}</td>
                                        <td>${parseFloat(client.balance).toFixed(2)}</td>
                                        <td>
                                            <Link to={"/client/details/"+client.id} className="btn btn-secondary btn-sm">
                                                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Details
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
            </div>
          )
    } else {
        return <Spinner />
    }

  }
}

// Clients.PropTypes = {
//     firestore: PropTypes.object.isRequired
//     firestore: PropTypes.array
// }

export default compose(
    firestoreConnect([{collection: 'clients'}]),
    connect((state, props)=>({
        clients: state.firestore.ordered.clients
    }))
)(Clients)