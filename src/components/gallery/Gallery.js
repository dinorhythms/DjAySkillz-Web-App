import React, { Component } from 'react';
// import $ from 'jquery'; 
import $ from './unitegallery/dist/js/jquery-11.0.min.js';
// import './unitegallery/dist/js/unitegallery';

class Gallery extends Component {
    shouldComponentUpdate(){
        return false;
    }

    componentDidMount(){
        this.$gal = $(this.gal);
        this.$gal.unitegallery();
        // $(this.refs.gallery).unitegallery(); 
    }

  render() {
    return (
        <div ref={gal => this.gal = gal} id="gallery" style={{display:'none'}}>

            <img alt=""
                src={'assets/images/albums/1.jpg'} 
                data-image={'assets/images/albums/1.jpg'}
                data-description={'$gallery->caption'}
                style={{display:"none"}}/>

        </div>
    )
  }
}

export default Gallery;