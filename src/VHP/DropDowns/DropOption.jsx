import React, { Component } from 'react';

export class DropOption extends Component {
    constructor(props) {
        super(props)

        //Class customization options
        if (props.optionClass) {
            this.optionClass = "dropdown-option" + ' ' + props.optionClass
        } else {
            this.optionClass = 'dropdown-option'
        }

        if (props.selected == true) {
            this.optionClass = this.optionClass + " selected"
        }

        this.handleClick = this.handleClick.bind(this)
    }

    /**
     * Click event handler
     * Can optionally pass data using props.data
     */
    handleClick(e){
        this.props.ClickFunction(this.props.data)
    }

    render() {
        return(
            <div 
                onClick = {this.handleClick} 
                className = {this.optionClass}
                id = {this.props.id}
                value={this.props.value}
                >
                    {this.props.text}
                    {this.props.selected&&<img 
                        className = "dropdown-arrow"
                        src="https://cdn-icons-png.flaticon.com/512/32/32195.png"/>
                    }
                {this.props.children}
            </div>
        );
    }
}