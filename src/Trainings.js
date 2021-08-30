import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Trainings extends Component {

  render(){
    let arr = [];
  arr.push((<div style={{margin: "10px 10px 10px 10px", background:"white" , padding:"10px 10px 10px 10px"}}><h2>Operations</h2>
    <ol style={{listStyleType:"none", listStylePosition:"inside", padding:"inherit", color: 'black'}}>
      <li>Theory of constraints</li>
      <li>Lean six sigma toolbox</li>
      <li>TQM</li>
      <li>TCM</li>
      <li>SCM</li>
      <li>Project management</li>
      <li>4M - Resource optimization</li>
      <li>PQDCSM</li>
  </ol></div>));

  arr.push((<div style={{margin: "10px 10px 10px 10px", background:"white", padding:"10px 10px 10px 10px"}}><h2>Strategy</h2>
    <ol style={{listStyleType:"none", listStylePosition:"inside", padding:"inherit", color: 'black'}}>
      <li>Industry 4.0</li>
      <li>Low cost automation</li>
      <li>Knowledge management service</li>
      <li>Growth Strategies</li>
    </ol></div>));
  
  arr.push((
    <div style={{margin: "10px 10px 10px 10px", background:"white", padding:"10px 10px 10px 10px"}}>
      <h2>Finance</h2>
      <ol style={{listStyleType:"none", listStylePosition:"inside", padding:"inherit", color: 'black'}}>
        <li>ABCM</li>
        <li>Marginal costing</li>
        <li>Growth vs Profits</li>
        <li>Understanding the balance sheet</li>
      </ol>
    </div>
  ));

  arr.push((
    <div style={{margin: "10px 10px 10px 10px", background:"white", padding:"10px 10px 10px 10px"}}>
      <h2>Sales and Marketing</h2>
          <ol style={{listStyleType:"none", listStylePosition:"inside", padding:"inherit", color: 'black'}}>
            <li>CRM</li>
            <li>Key account management</li>
            <li>Cross selling strategies</li>
            <li>Transitioning to Ecommerce</li>
            <li>B2B</li>
            <li>B2C</li>
          </ol>
    </div>
  ));

  arr.push((
    <div style={{margin: "10px 10px 10px 10px", background:"white", padding:"10px 10px 10px 10px"}}>
      <h2>Human Resources</h2>
      <ol style={{listStyleType:"none", listStylePosition:"inside", padding:"inherit", color: 'black'}}>
        <li>Key performance indicators</li>
            <li>Key result areas</li>
            <li>Team work basics</li>
          </ol>
    </div>
  ));

  arr.push((
    <div style={{margin: "10px 10px 10px 10px", padding:"10px 10px 10px 10px", background:"white"}}>
      <h2>Behavioral</h2>
          <ol style={{listStyleType:"none", listStylePosition:"inside", padding:"inherit", color: 'black'}}>
            <li>SWOT analysis</li>
            <li>Maslow's hierarchy of needs</li>
            <li>Stress management</li>
            <li>Daily work management</li>
            <li>Personal accountability</li>
          </ol>
    </div>
  ));
    return(
      <div style={{color:"white", width:"100%", height:"40%"}}>
      <div className="row" style={{color:"white", width:"100%", height:"40%", paddingBottom:"2%", paddingTop:"1%"}}>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <h6>Trainings</h6><br/>
                      <Carousel autoPlay={"true"} infiniteLoop={"true"} showArrows={"false"} axis={"horizontal"} showStatus={"false"} showIndicators={"false"} showThumbs={"false"} >
                <div>
                    <img src="assets/img/trainings/t1.png" />
                </div>
                <div>
                  <img src="assets/img/trainings/t2.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t3.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t4.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t5.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t6.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t7.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t8.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t9.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t10.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t11.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t12.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t13.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t14.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t15.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t16.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t17.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t18.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t19.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t20.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t21.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t22.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t23.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t24.png"  />
                </div>
                <div>
                    <img src="assets/img/trainings/t25.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t26.png"  />
                </div>
                <div>
                  <img src="assets/img/trainings/t27.png"  />
                </div>
            </Carousel>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <img src="assets/img/trainings/trainingsMain.png" width="100%" />
                      </div>
        </div>
        <div style={{color:"blue", display:"flex", flexWrap:"wrap", height:"100%", justifyContent: "center"}}>
        {arr.map((item)=>{
          return item;
        })}
      </div>
      </div>
    );
  }
}

export default Trainings;
