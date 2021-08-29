import React, {Component} from 'react';

class Affiliations extends Component {
  render(){
    let arr= [];
    for(let i=1; i<=18;i++){
        arr.push('con'+i+'.png');
    }
    return(
      <div>
          <h2 style={{color:"white"}}>Affiliations</h2>
          <div style={{display:"flex", flexWrap:"wrap", background: "lightgrey", overflow: "hidden", justifyContent: "space-evenly"}}>
          {arr.map((image)=>{
              return <img src={"assets/img/"+image+""} width={"200px"} height={"150px"} style={{padding:"10px 10px 10px 10px", margin:"10px 10px 10px 10px", border: "1px solid black", background:"white"}} />
          })}
          </div>
      </div>
    );
  }
}

export default Affiliations;