import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
            <img src={spinner} className="img-fluid" alt="Loading..." style={{width:'100px'}} />
        </div>
      </div>
    </div>
  )
}