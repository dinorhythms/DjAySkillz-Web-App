import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

import Nav from './components/layouts/Nav';
import Home from './components/home/Home';
import Footer from './components/layouts/Footer';
import Bio from './components/bio/Bio';
import Albums from './components/gallery/Albums';
import AlbumGallery from './components/gallery/AlbumGallery';
import Updates from './components/updates/Updates';
import Events from './components/events/Events';
import Portfolio from './components/portfolio/Portfolio';
import Videos from './components/videos/Videos';
import Contact from './components/contact/Contact';
import UpdateDetails from './components/updates/UpdateDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bio" component={Bio} />
                <Route exact path="/albums" component={Albums} />
                <Route exact path="/albums/view/:id" component={AlbumGallery} />
                <Route exact path="/updates" component={Updates} />
                <Route exact path="/updates/view/:id" component={UpdateDetails} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/videos" component={Videos} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
