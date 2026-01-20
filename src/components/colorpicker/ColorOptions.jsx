import React from "react"
import "./Coloroptions.css"
import { render } from "@testing-library/react"

export class ColorOptions extends React.Component {   
      state ={
        color: null
      }
      handleOptionClick =(colorInd) => {

      }





     render(){
        	return (
		<div>
			<h2>Color Picker</h2>
            <div className="wrapper">
                {this.props.options.map(option => {
                return <div key={option.label} onClick={this.handleOptionClick} className="label">
                    <span style={{color: option.color, fontSize: '24px'}}>{ option.label }</span>
			</div>
            })}
            </div>
		</div>
	)
     }
}