import React from 'react';
import pagepg_img from './assets/images/page-bg.jpg';

export default function Header(props) {
  return (
    <div className="page-header page-header-small" style={{backgroundImage: `url(${pagepg_img})`}}>
        <div className="container">
            <div className="content-center">
                <h1 className="title1">{props.title}</h1>
                <div className="text-center text-uppercase">
                    <ol className="breadcrumb">
                        <strong style={{margin: '0px auto'}}>{props.breadcrumb}</strong>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}
