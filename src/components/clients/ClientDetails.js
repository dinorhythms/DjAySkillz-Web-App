import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import classnames from 'classnames';
import Spinner from '../layouts/Spinner';

class ClientDetails extends Component {

    state = {
        showBalanceUpdate: false,
        balanceUpdateAmount: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleSubmit = (e) => {

        e.preventDefault();

        

        const newBalance = this.state.balanceUpdateAmount;
        console.log(newBalance);
        // const { firestore, history } = this.props;


        // if(client.balance === '') {
        //     client.balance = 0;
        // }

        // firestore.add({collection: 'clients'}, client)
        //     .then(()=>history.push('/'))
        
    }

  render() {
    const { client } = this.props;
    const { showBalanceUpdate, balanceUpdateAmount } = this.state;

    let balanceFrom = '';

    if (showBalanceUpdate) {
        balanceFrom = (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input type="text"
                        className="form-control" 
                        name="balanceUpdateAmount" 
                        value={balanceUpdateAmount}
                        onChange={this.onChange}
                        placeholder="Add New Balance"
                        />
                </div>
                <div className="input-group-append">
                    <input type="submit" value="Update" className="btn btn-outline-dark"/>
                </div>

                
            </form>
        )
    } else {
        balanceFrom = null;
    }

    if(client){
        return (
            <div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <p>
                            <Link to="/" className="btn-link mb-3">
                                <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back to Dashboard
                            </Link>
                        </p>    
                    </div>
                    <div className="col-md-6">
                        <div className="btn-group float-right mt-2">
                            <Link to={`/client/edit/+${client.id}`} className="btn btn-dark btn-sm mb-3">
                                Edit
                            </Link>
                            <Link to={`/client/edit/+${client.id}`} className="btn btn-danger btn-sm mb-3">
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="card text-left">
                    <h3 className="card-header">{client.firstName} {client.lastName}</h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 col-sm-6">
                                <h4 className="">CLient ID: <span className="text-secondary">{client.id}</span></h4>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <h3 className="float-right">Balance: <span className={classnames({
                                        'text-danger': client.balance > 0,
                                        'text-success': client.balance === 0
                                    })}>${parseFloat(client.balance).toFixed(2)}</span>{' '}
                                    <small>
                                        <a href="#!" onClick={()=>this.setState({showBalanceUpdate: !this.state.showBalanceUpdate})}><i className="fa fa-arrow-circle-o-left"></i></a>
                                    </small>
                                </h3>
                                {balanceFrom}
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <ul className="list-group p-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center activee">
                            Client Email: {client.email}
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Client Phone: {client.phone}
                        </li>

                    </ul>
                </div>
                
            </div>
          )
    }  else {
        return <Spinner />
    }
  }
}

export default compose(
    firestoreConnect( props => [
        {collection: 'clients', storeAs: 'client', doc: props.match.params.id}
    ]),
    connect(({ firestore: {ordered} }, props)=>({
        client: ordered.client && ordered.client[0]
    }))
)(ClientDetails)