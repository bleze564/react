import React from "react"

export class UserCard extends React.Component{
  render(){
  return (
    <div>
      <h1>Ім’я: {this.props.name}</h1>
      <p>Вік: {this.props.age}</p>
      <p>Місто: {this.props.city}</p>
    </div>
  );
  }

}
