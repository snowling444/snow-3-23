import React from 'react';
import axios from 'axios';

import Card from './component/Card';

class Mine extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      num:5
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/snowling444/snow-3-23/master/data/card.json?a='+Math.random())
     .then( res => this.setState({data:res.data,wait:false}))
  }
  render(){
    return(
      <div className="jumbotron">
        {this.state.wait ? <h4>请稍等</h4> : this.state.data.map((item,i) => <Card {...item} key={i} />)}
        <button type="button" className="btn btn-info">More</button>
      </div>
    )
  }
}

export default Mine;
