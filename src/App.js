import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="jumbotron container-fluid">
        <div className='row'>
          <div className="col-xs-6 col-sm-4">
            <h2>黑夜的献诗</h2>
            <h4>黑夜从大地上升起</h4>
            <h4>遮住了光明的天空</h4>
            <h4>丰收后荒凉的大地</h4>
            <h4>黑夜从你内部升起</h4>
          </div>
          <div className="col-xs-6 col-sm-4">
            <h2>黑夜的献诗</h2>
            <h4>你从远方来, 我到远方去</h4>
            <h4>遥远的路程经过这里</h4>
            <h4>天空一无所有</h4>
            <h4>为何给我安慰</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
