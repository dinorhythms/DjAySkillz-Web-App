import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Albums extends Component {
  renderAlbums = () => {
    return this.props.albums.map(album => {
      return (
        <div key={album.uid} className="col-md-4 p-3">
          <Link to={`/albums/view/${album.id}`}>
            <img src={`assets/images/albums/${album.image}`} alt="" />
            <h5 className="mb-0">{album.name}</h5>
            <p>{album.location} @ {album.date.toDate().toGMTString()}</p>
          </Link>
        </div>
      );
    });
  };

  render() {

    const { albums } = this.props;

    return (
      <div className="wrapper">
        <Header title="GALLERY" breadcrumb="Photo Albums" />

        <section className="galleryalbum text-center mt-50">
          <div className="container">
            <div className="row">
              {albums ? this.renderAlbums() : null}
            </div>
          </div>
        </section>

        <section className="mypagination">
          <div className="container">
            <div className="row">
              <div className="col" />
              <div className="col-md-3">
                {/* {{ $galleryalbums->links() }} */}
              </div>
              <div className="col" />
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
      collection: "galleryAlbum",
      queryParams: ["limitToFirst=10"],
      where: [["active", "==", true]]
    }
  ]),
  connect((state, props) => ({
    albums: state.firestore.ordered.galleryAlbum
  }))
)(Albums);
