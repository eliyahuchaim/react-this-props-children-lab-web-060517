import React from 'react';
class Invitation extends React.Component {

  render(){
    const Children = React.Children.map(this.props.children, child => {
      return (<div> {child} </div>
      )
    })
    return (
      <div>
      <h1>You've been invited!</h1>
      {Children}
      </div>
    )
  }
}

export default Invitation;
