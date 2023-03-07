import React, { Component } from 'react';

export class Checkbox extends Component {
    constructor(props) {
        super(props)

        if (props.inputClass) {
            this.inputClass = "checkbox-cont" + ' ' + this.props.inputClass
        } else {
            this.inputClass = 'checkbox-cont'
        }

        this.handleClick = this.handleClick.bind(this)
    }

    /**
     * Click event handler
     */
    handleClick(){
        this.props.ClickFunction(!this.props.value, this.props.data)
    }

    render() {
        return(
            <div 
                onClick = {this.handleClick} 
                className = {this.inputClass}
                id = {this.props.id}
            >
                {this.props.value&&<div className = "checkbox-check"></div>}
            </div>
        );
    }
}