import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Contactpage from './Contactpage';
class Routing extends Component{

  constructor(props){
    super(props);

    this.state={
    }
  }

  handleChange = (req) => {
  }

  fileHandle(req){
  }

  render(){
    return(
      <div>
        <Route exact path="/contact" render={() => (
                  <div>
                  <Contactpage/>
                  </div>
        )}/>
        <Route exact path="/" render={() => (
            <div style={{"background":"black"}}>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand">Consultech Engineers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Training Suite</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">Talent pool</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Case Studies</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                    <div className="masthead-heading">Welcome To Consultech!</div>
                    <div className="masthead-subheading">Your single window for diverse Training Requirements</div>
                    <div><img src="assets/img/consultechIntroImage.png" style={{"height":"30%","width":"60%"}}/></div><br/>
                    <a className="btn btn-primary btn-xl text-uppercase" onClick={() => {
                      this.props.history.push('/contact');
                    }}>Contact Us</a>
            </header>
            </div>
        )}/>
      </div>)


  }
}

export default withRouter(Routing);
