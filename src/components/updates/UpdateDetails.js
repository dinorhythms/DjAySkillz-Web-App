import React, { Component } from "react";
import Header from "../layouts/Header";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class UpdateDetails extends Component {
  
  createMarkup() {
    const { update } = this.props;
    return { __html: update.content };
  }

  render() {

    const { update } = this.props;

    return (
      <div className="wrapper">
        <Header
          title="UPDATES"
          breadcrumb="LATEST GISTS, SHOWS, MIXTAPES, MUSIC AND EVENTS..."
        />

        <section className="events-content bg-dark text-white">
          <div className="container">
            <div className="row">
              {update ? (
                <div className="col-md-12">
                  <img
                    src={`/assets/images/update/${update.image}`}
                    alt="updates"
                  />

                  <p className="mt-3 text-warning">
                    {update.date.toDate().toGMTString()}
                  </p>
                  <h2 className="mt-3 text-uppercase">{update.title}</h2>

                  <div dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(props => [
    {
      collection: "updates",
      queryParams: ["limitToFirst=1"]
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    update: ordered.updates && ordered.updates[0]
  }))
)(UpdateDetails);
