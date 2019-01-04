import React from 'react';
import { Link } from 'react-router-dom';
import logo from './djayskillz.png';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="200">
        <div className="container">
            <div className="navbar-translate">
                <Link to="/" className="navbar-brand navbar-brand-logo">
                    <div className="logo">
                        <img alt="DJ AySkillz Logo" src={logo}/>
                    </div>
                </Link>
                <a className="navbar-brand" href="/" rel="tooltip" title="" data-placement="bottom">
                
                </a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="{blurredimage}">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fa fa-home fa-lg"></i>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link className="nav-link" to="/bio">
                            <i className="fas fa-user fa-lg"></i>
                            <p>Bio</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/albums">
                            <i className="fas fa-camera fa-lg"></i>
                            <p>Gallery</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/updates">
                            <i className="fas fa-spinner fa-lg"></i>
                            <p>Updates</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">
                            <i className="fas fa-list fa-lg"></i>
                            <p>Events</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">
                            <i className="fas fa-music fa-lg"></i>
                            <p>Portfolio</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/videos">
                            <i className="fas fa-play fa-lg"></i>
                            <p>Videos</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            <i className="fas fa-phone fa-lg"></i>
                            <p>Contact Us</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" to="http://www.twitter.com/ayskillzbaddest" target="_blank">
                            <i className="fab fa-twitter fa-2x"></i>
                            <p className="d-lg-none d-xl-none">Twitter</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" to="http://www.facebook.com/baddestdjayskillz" target="_blank">
                            <i className="fab fa-facebook fa-2x"></i>
                            <p className="d-lg-none d-xl-none">Facebook</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" to="https://www.instagram.com/baddestdjayskillz" target="_blank">
                            <i className="fab fa-instagram fa-2x"></i>
                            <p className="d-lg-none d-xl-none">Instagram</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  ) 
}

export default Nav;
