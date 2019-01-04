import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddClient extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleSubmit = (e) => {

        e.preventDefault();

        const client = this.state;
        const { firestore, history } = this.props;


        if(client.balance === '') {
            client.balance = 0;
        }

        firestore.add({collection: 'clients'}, client)
            .then(()=>history.push('/'))
        
    }

    render() {
        return (
        <div>
            <div className="row mt-3">
                    <div className="col-md-6">
                        <p>
                            <Link to="/" className="btn-link mb-3">
                                <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Back to Dashboard
                            </Link>
                        </p>
                        <h2 className="mt-3 mb-4">Add Client</h2>

                        <form className="" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text"
                                    className="form-control" 
                                    name="firstName" 
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                    placeholder="First Name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Last Name</label>
                                <input type="text"
                                    className="form-control" 
                                    name="lastName" 
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                    placeholder="Last Name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    className="form-control" 
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    placeholder="larrysnet2001@gmail.com"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Phone</label>
                                <input type="text"
                                    className="form-control" 
                                    name="phone" 
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    placeholder="08022835496"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Balance</label>
                                <input type="text"
                                    className="form-control" 
                                    name="balance" 
                                    value={this.state.balance}
                                    onChange={this.onChange}
                                    placeholder="0"/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>

                        </form>

                    </div>
            </div>
                
        </div>
        )
    }
}

export default firestoreConnect()(AddClient);