import React from "react";
import "./DropDown.css";

export class DropDown extends React.Component{

  state = {
    showMenu : false
  }

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle"
        onClick={() => (this.setState({showMenu : true}))}
        >
          Open
        </button>

        
        {this.state.showMenu && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}
