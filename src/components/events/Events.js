import React, { Component } from "react";
import Header from "../layouts/Header";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Events extends Component {
  render() {
    const { upcomingEvents, pastEvents } = this.props;

    if (upcomingEvents) console.log('UPCOMING', upcomingEvents);
    if (pastEvents) console.log('PAST', pastEvents);

    return (
      <div className="wrapper">
        <Header
          title="EVENTS"
          breadcrumb="ALL PAST AND UPCOMING EVENTS CALENDER..." 
        />

        <section className="events-content bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Upcoming</h2>

                <div
                  style={{
                    borderBottom: "1px solid rgba(243, 243, 243, 0.5)",
                    height: "1px"
                  }}
                />

                {upcomingEvents?(
                    upcomingEvents.map(event=>{
                        return(
                            <div className="events-item">
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 text-leftt datee event">
                                        <div className="event-image">
                                            <div className="event-date">
                                            <span className="day-of-month">{event.date.toDate().toDateString()}</span>
                                            </div>
                                            <img
                                                src={`/assets/images/events/${event.image}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-9 text-left content">
                                        <h4 className="card-title">{event.venue}</h4>
                                        <span className="card-text">
                                            {" "}
                                            {event.location}.{" "}
                                        </span>
                                        <p className="mb-0">
                                            {event.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    
                ):(
                    <div className="events-item">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 text-left content">
                                <h3 className="card-title">No Upcoming Event</h3>
                            </div>
                        </div>
                    </div>
                )}

                <h2 className="mt-5">Past</h2>

                <div
                  style={{
                    borderBottom: "1px solid rgba(243, 243, 243, 0.5)",
                    height: "1px"
                  }}
                />

                {pastEvents && pastEvents.length > 0?(
                    pastEvents.map(event=>{
                        return (
                            <div className="events-item">
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 text-leftt datee event">
                                        <div className="event-image">
                                            <div className="event-date">
                                            <span className="day-of-month">{event.date.toDate().toDateString()}</span>
                                            </div>
                                            <img
                                                src={`/assets/images/events/${event.image}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-9 text-left content">
                                        <h4 className="card-title">{event.venue}</h4>
                                        <span className="card-text">
                                            {" "}
                                            {event.location}.{" "}
                                        </span>
                                        <p className="mb-0">
                                            {event.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ):(
                    <div className="events-item">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 text-left content">
                                <h3 className="card-title">No Past Event</h3>
                            </div>
                        </div>
                    </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default compose(
  firestoreConnect([
    {
      collection: "events",
      storeAs: "upcomingEvents",
      where: [["date", ">=", new Date()]],
      queryParams: ["limitToFirst=10"]
    },
    {
      collection: "events",
      storeAs: "pastEvents",
      where: [["date", "<=", new Date()]],
      queryParams: ["limitToFirst=10"]
    }
  ]),
  connect((state, props) => ({
    upcomingEvents: state.firestore.ordered["upcomingEvents"],
    pastEvents: state.firestore.ordered["pastEvents"]
  }))
)(Events);
