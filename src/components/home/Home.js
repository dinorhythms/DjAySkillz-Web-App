import React, { Component } from "react";
import bg from "./bg.jpg";
import lowerbg from "./upcoming-stage-bg.jpg";
import Countdown from "../layouts/countdown/Countdown";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Home extends Component {
  render() {
    // const upComingEvent = true;
    // const currentDate = new Date();
    // const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    const { events } = this.props;

    return (
      <div>
        <div className="wrapper">
          <div className="page-header clear-filter" filter-color="black">
            <div
              className="page-header-image"
              data-parallax="true"
              style={{ backgroundImage: `url(${bg})` }}
            />
          </div>
        </div>

        <div
          className="section section-padding upcoming-stage-section text-white"
          style={{ backgroundImage: `url(${lowerbg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="section-header left-style">
                  <h3 className="section-title">
                    Upcoming Show <br />
                  </h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="stage-countdown-wrap">
                  {events && events.length > 0 ? (
                    <div>
                      <h3 className="stage-title text-center">
                        {events[0].venue}
                      </h3>
                      <p className="stage-location text-center">
                        {events[0].location}
                      </p>
                      <div className="countdown-stage">
                        <Countdown date={events[0].date.toDate()} />
                        {/* <Countdown date={`${year}-12-24T00:00:00`} /> */}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="stage-title text-center">
                        No Upcoming Event
                      </h3>
                      <div className="countdown-stage">
                        <Countdown date={`2018-12-28T15:11:20.296Z`} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  firestoreConnect([
    {
        collection: "events",
        where: [
            ["date", ">=", new Date()],
            // ["image", "==", "12.jpg"]
        ],
        queryParams: ["limitToFirst=1"],
          // where: ["active", "==", true],
    }
  ]),
  connect((state, props) => ({
    events: state.firestore.ordered.events
  })) 
)(Home);
