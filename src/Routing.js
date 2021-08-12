import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Homepage from './Homepage';
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
        <Route exact path="/" render={() => (
                  <div>
                  <Homepage/>
                  </div>
        )}/>
      </div>)


  }
}

export default withRouter(Routing);
