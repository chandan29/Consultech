import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Contactpage from './Contactpage';
import Talent from './Talent';
import Testimonials from './Testimonials';
import Trainings from './Trainings';
import CaseStudies from './CaseStudies';
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
      <div style={{"background":"black"}}>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand">Consultech Engineers</a>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                      <li className="nav-item"><a className="nav-link" onClick={() => {
                        this.props.history.push('/');
                      }}>Home</a></li>
                      <li className="nav-item"><a className="nav-link" onClick={() => {
                        this.props.history.push('/training');
                      }}>Training Suite</a></li>
                      <li className="nav-item"><a className="nav-link" onClick={() => {
                        this.props.history.push('/talent');
                      }}>Talent pool</a></li>
                      <li className="nav-item"><a className="nav-link" onClick={() => {
                        this.props.history.push('/testimonials');
                      }}>Testimonials</a></li>
                      <li className="nav-item"><a className="nav-link" onClick={() => {
                        this.props.history.push('/caseStudies');
                      }}>Case Studies</a></li>
                  </ul>
              </div>
          </div>
      </nav>
        <Route exact path="/contact" render={() => (
                  <div style={{"background":"black"}}>
                  <Contactpage/>
                  </div>
        )}/>
        <Route exact path="/training" render={() => (
                  <div style={{"background":"black"}}>
                  <Trainings/>
                  </div>
        )}/>
        <Route exact path="/talent" render={() => (
                  <div style={{"background":"black"}}>
                  <Talent/>
                  </div>
        )}/>
        <Route exact path="/testimonials" render={() => (
                  <div style={{"background":"black"}}>
                  <Testimonials/>
                  </div>
        )}/>
        <Route exact path="/caseStudies" render={() => (
                  <div style={{"background":"black"}}>
                  <CaseStudies/>
                  </div>
        )}/>
        <Route exact path="/" render={() => (
            <div style={{"background":"black"}}>
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
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Consultech Engineers Pvt. Ltd 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
      </div>)


  }
}

export default withRouter(Routing);
