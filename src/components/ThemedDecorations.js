import React from 'react';


class ThemedInvitation extends React.Component{

  render(){
    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return (
        <div className="heaven" >
        {child}
        </div>
      )
    })
    return (
      <div>
      {childrenWithClassName}
      </div>
    )
  }
}

export default ThemedInvitation;
