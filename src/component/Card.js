import React from 'react';

class Card extends React.Component {
  render () {
    return(
      <div className='clearfix'>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

Card.defaultProps={
  index:1,
  title:'Today',
  desc:'不是很开心'
}
Card.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}
export default Card;
