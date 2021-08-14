import React, {Component} from 'react';

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
      <div style={{color:"blue", display:"flex", flexWrap:"wrap", justifyContent: "center"}}>
        {arr.map((item)=>{
          return item;
        })}
      </div>
    );
  }
}

export default Trainings;
