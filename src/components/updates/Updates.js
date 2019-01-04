import React, { Component } from 'react';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Updates extends Component {
  render() {

    const { updates } = this.props;

    return (
        <div className="wrapper">

            <Header title='UPDATES' breadcrumb='LATEST GISTS, SHOWS, MIXTAPES, MUSIC AND EVENTS...' /> 

            <section className="events-content bg-dark text-white">
                <div className="container">

                    <div className="row">

                        {updates?(
                            updates.map(update => {
                                return (
                                    <div key={update.id} className="col-md-4">
                                        <Link to={`/updates/view/${update.id}`}>
                                            <div className="card text-white">
                                                <img className="card-img-top" src={'/assets/images/update/thumbnails/nainoa-shizuru-80385.jpg'} alt=""/>
                                                <div className="card-body text-black text-center">
                                                    <h4 className="card-title mt-0">{update.title}</h4>
                                                    <p className="card-text">{update.date.toDate().toGMTString()} </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                            
                        ):null}
                        
                    </div>

                    <div className="row update">
                        <div className="col">
                        </div>
                        <div className="col-md-3">
                            {/* {{ $updates->links() }} */}
                        </div>
                        <div className="col">
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
  }
}

export default compose(
    firestoreConnect( props => [
        {
            collection: 'updates', 
            queryParams: [ 'startAt=5', 'limitToFirst=10' ]
        },
    ]),
    connect(({ firestore: {ordered} }, props)=>({
        updates: ordered.updates,
    }))
)(Updates)
