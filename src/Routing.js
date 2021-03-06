import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Talent from './Talent';
import Testimonials from './Testimonials';
import Trainings from './Trainings';
import CaseStudies from './CaseStudies';
import {Navbar,Nav,Container} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Affiliations from './Affiliations';
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
      <div style={{"background":"black", height:"100%"}}>
      <Navbar fixed="top" expand="lg" style={{width:"100%", height:"16%", background:"black"}}>
  <Container>
    <Navbar.Brand style={{color:"white", width:"40%"}}>
      <img src="assets/img/Logo3.png" width="25%" height="75px"/>
      <b style={{width:"40%", paddingLeft:"5%"}}>CONSULTECH ENGINEERS</b></Navbar.Brand>
    <Navbar.Toggle style={{background:"white"}} id="toggleNavBar" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{color:"white", background:"black"}} className="nav-links" onClick={() => {
          this.props.history.push('/');
          document.getElementById('toggleNavBar').click();
        }}>Home</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} className="nav-links" onClick={() => {
          this.props.history.push('/training');
          document.getElementById('toggleNavBar').click();
        }}>Training Suite</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} className="nav-links" onClick={() => {
          this.props.history.push('/talent');

          document.getElementById('toggleNavBar').click();
        }}>Talent pool</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} className="nav-links" onClick={() => {
          this.props.history.push('/testimonials');
          document.getElementById('toggleNavBar').click();
        }}>Testimonials</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} className="nav-links" onClick={() => {
          this.props.history.push('/caseStudies');
          document.getElementById('toggleNavBar').click();
        }}>Case Studies</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} className="nav-links" onClick={() => {
          this.props.history.push('/affiliations');
          document.getElementById('toggleNavBar').click();
        }}>Affiliations</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  <div style={{paddingTop:"8%"}}>
	<h5 style={{color:"white"}}>Contact Us  <p style={{color:"white"}}>training@consultechengineers.in , +91 9096545201 (Mobile & WA) </p></h5>
  </div>
        <Route exact path="/training" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"1%", paddingBottom:"1%"}}>
                  <Trainings/>
                  </div>
        )}/>
        <Route exact path="/talent" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"1%", paddingBottom:"1%"}}>
                  <Talent/>
                  </div>
        )}/>
        <Route exact path="/testimonials" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"1%", paddingBottom:"1%"}}>
                  <Testimonials/>
                  </div>
        )}/>
        <Route exact path="/caseStudies" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"1%", paddingBottom:"1%"}}>
                  <CaseStudies/>
                  </div>
        )}/>
        <Route exact path="/affiliations" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"1%", paddingBottom:"1%"}}>
                  <Affiliations/>
                  </div>
        )}/>
        <Route exact path="/" render={() => (
            <div style={{background:"black", height:"100%"}}>
                    <div className="row" style={{color:"white", width:"100%", height:"100%", paddingBottom:"2%", paddingTop:"1%"}}>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <h6>Affiliations and associations</h6>
                      <Carousel autoPlay={"true"} infiniteLoop={"true"}>
                <div>
                    <img src="assets/img/con1.png" />
                </div>
                <div>
                    <img src="assets/img/con2.png" />
                </div>
                <div>
                    <img src="assets/img/con3.png" />
                </div>
                <div>
                    <img src="assets/img/con4.png" />
                </div>
                <div>
                    <img src="assets/img/con5.png" />
                </div>
                <div>
                    <img src="assets/img/con6.png" />
                </div>
                <div>
                    <img src="assets/img/con7.png" />
                </div>
                <div>
                    <img src="assets/img/con8.png" />
                </div>
                <div>
                    <img src="assets/img/con9.png" />
                </div>
                <div>
                    <img src="assets/img/con10.png" />
                </div>
                <div>
                    <img src="assets/img/con11.png" />
                </div>
                <div>
                    <img src="assets/img/con12.png" />
                </div>
                <div>
                    <img src="assets/img/con13.png" />
                </div>
                <div>
                    <img src="assets/img/con14.png" />
                </div>
                <div>
                    <img src="assets/img/con15.png" />
                </div>
                <div>
                    <img src="assets/img/con16.png" />
                </div>
                <div>
                    <img src="assets/img/con17.png" />
                </div>
                <div>
                    <img src="assets/img/con18.png" />
                </div>
            </Carousel>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <img src="assets/img/allTrainings.png" width="100%" height="100%"/>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <img src="assets/img/features.png" width="100%" height="100%"/>
                      </div>
                    {/*<Contactpage/>*/}
                    </div>

            </div>
        )}/>
        <footer className="footer py-4" style={{height:"10%", color:"white"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Consultech Engineers Pvt. Ltd 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!" style={{color:"white"}}>Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!" style={{color:"white"}}>Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
      </div>)


  }
}

export default withRouter(Routing);
