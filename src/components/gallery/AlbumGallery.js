import React, { Component } from 'react';
import Header from '../layouts/Header';
import Gallery from 'react-grid-gallery';

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class AlbumGallery extends Component {

  render() {

    const { albumImages, album } = this.props;
    // this.IMAGES = null;

    if(albumImages){
        this.IMAGES = albumImages.map(image => {
            return {
                src: `/assets/images/albums/${image.name}`,
                thumbnail: `/assets/images/albums/thumbnails/${image.thumbnail}`,
                caption: image.captions,
                thumbnailWidth: 1,
                thumbnailHeight: 1,
            }
        })
    }

    return (
        <div className="wrapper">
            {album?(
                <Header title={album.name} breadcrumb={album.location} />
            ):(
                <Header title="Album" breadcrumb='Dj Ay Skillz' />
            )}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 p-5">

                            {this.IMAGES?(
                                <Gallery images={this.IMAGES}/>
                            ):null}

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
            collection: 'albumImages', 
            where: ['galleryAlbumID', '==', props.match.params.id]
        },
        {
            collection: "galleryAlbum",
            queryParams: ["limitToFirst=1"],
            where: [["active", "==", true]]
        }
    ]),
    connect(({ firestore: {ordered} }, props)=>({
        albumImages: ordered.albumImages,
        album: ordered.galleryAlbum && ordered.galleryAlbum[0]
    }))
)(AlbumGallery)