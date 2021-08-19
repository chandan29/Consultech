import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Contactpage from './Contactpage';
import Talent from './Talent';
import Testimonials from './Testimonials';
import Trainings from './Trainings';
import CaseStudies from './CaseStudies';
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
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
      <div style={{"background":"black"}}>
      <Navbar fixed="top" expand="lg" style={{width:"100%", background:"black", height:"10%"}}>
  <Container>
    <Navbar.Brand style={{color:"white"}}><b>Consultech Engineers</b></Navbar.Brand>
    <Navbar.Toggle style={{background:"white"}} id="toggleNavBar" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{color:"white", background:"black"}} onClick={() => {
          this.props.history.push('/');
          document.getElementById('toggleNavBar').click();
        }}>Home</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} onClick={() => {
          this.props.history.push('/training');
          document.getElementById('toggleNavBar').click();
        }}>zzz</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} onClick={() => {
          this.props.history.push('/talent');

          document.getElementById('toggleNavBar').click();
        }}>Talent pool</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} onClick={() => {
          this.props.history.push('/testimonials');
          document.getElementById('toggleNavBar').click();
        }}>Testimonials</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} onClick={() => {
          this.props.history.push('/caseStudies');
          document.getElementById('toggleNavBar').click();
        }}>Case Studies</Nav.Link>
        <Nav.Link style={{color:"white", background:"black"}} onClick={() => {
          this.props.history.push('/affiliations');
          document.getElementById('toggleNavBar').click();
        }}>Affiliations</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <Route exact path="/training" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"10%",paddingBottom:"10%"}}>
                  <Trainings/>
                  </div>
        )}/>
        <Route exact path="/talent" render={() => (
                  <div style={{background:"black", height:"40%", width:"100%", paddingTop:"10%",paddingBottom:"10%"}}>
                  <Talent/>
                  </div>
        )}/>
        <Route exact path="/testimonials" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"10%",paddingBottom:"10%"}}>
                  <Testimonials/>
                  </div>
        )}/>
        <Route exact path="/caseStudies" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"10%",paddingBottom:"10%"}}>
                  <CaseStudies/>
                  </div>
        )}/>
        <Route exact path="/affiliations" render={() => (
                  <div style={{background:"black", height:"70%", width:"100%", paddingTop:"10%",paddingBottom:"10%"}}>
                  <Affiliations/>
                  </div>
        )}/>
        <Route exact path="/" render={() => (
            <div style={{background:"black", height:"70%", width:"100%", paddingTop:"10%",paddingBottom:"10%"}}>
                    {/*<div><img src="assets/img/consultechIntroImage.png" style={{"height":"30%","width":"60%"}}/></div><br/>*/}
                    <div style={{color:"white"}}>
                    <Contactpage/>
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
