import React, { Component } from 'react';
import Header from '../layouts/Header';

class Contact extends Component {
  render() {
    return (
        <div className="wrapper">

            <Header title='CONTACT' breadcrumb='GET IN TOUCH' />

            <div className="section1">
                <div className="fluid-container">
                    <div className="fluid-col-1 contact-info-item">
                        <h3 className="contact-title">Press</h3>
                        <h5 className="contact-person">Oliver Liam</h5>
                        <p className="contact-info"><i className="fas fa-phone fa-lg"></i> +1-0000-000-0000<br/><i className="fas fa-envelope fa-lg"></i> mail@example.com</p>
                    </div>
                    <div className="fluid-col-1 contact-info-item" style={{backgroundImage: `url(assets/images/page-bg.jpg)`}}>
                        <h3 className="contact-title">Management</h3>
                        <h5 className="contact-person">Jack Hobbies</h5>
                        <p className="contact-info"><i className="fas fa-phone fa-lg"></i> +1-0000-000-0000<br/><i className="fas fa-envelope fa-lg"></i> mail@example.com</p>
                    </div>
                    <div className="fluid-col-1 contact-info-item">
                        <h3 className="contact-title">Booking</h3>
                        <h5 className="contact-person">Swan M.Lee</h5>
                        <p className="contact-info"><i className="fas fa-phone fa-lg"></i> +1-0000-000-0000<br/><i className="fas fa-envelope fa-lg"></i> mail@example.com</p>
                    </div>
                    <div className="fluid-col-1 contact-info-item" style={{backgroundImage: `url(assets/images/page-bg.jpg)`}}>
                        <h3 className="contact-title">Label</h3>
                        <h5 className="contact-person">Bob Marlin</h5>
                        <p className="contact-info"><i className="fas fa-phone fa-lg"></i> +1-0000-000-0000<br/><i className="fas fa-envelope fa-lg"></i> mail@example.com</p>
                    </div>
                </div>
            </div>

            <div className="section1 form-map-section">
                <div className="fluid-container">
                    <div className="fluid-col-2 contact-form-wrap text-white" style={{backgroundImage: `url(assets/images/form.jpg)`}}>
                        <div className="overlay-black">
                            <div className="section-header">
                                <h3 className="section-title">Contact Us</h3>
                                <p className="section-subtext">Thank you htmlFor your interest in BADDEST DJ AY SKILLZ Services. To request a quote, please complete the FORM below. We will respond within one business day. </p>
                            </div>
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="">Full Name</label>
                                          <input type="text" name="name" id="" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="">Email</label>
                                          <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="">Phone</label>
                                          <input type="phone" name="phone" id="" className="form-control" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="">Message</label>
                                          <textarea className="form-control" name="message" id="" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group mb-0 clearfix">
                                            <p>
                                                <button type="submit" className="btn btn-white">Send Message</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            
                        </div>
                    </div>
                    <div className="fluid-col-2 map-area" id="map-area">
                        <div className="google-map office-location" id="location" data-lat="23.75043" data-lng="90.38844" data-zoom="16">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.384770230229!2d3.344893714168294!3d6.599011495227755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92257000e0bf%3A0xb3bcff09ee3d0000!2s3+Mojidi+Street%2C+Ikeja!5e0!3m2!1sen!2sng!4v1485880249050" width="100%" height="777" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Contact;