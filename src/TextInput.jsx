import React, { Component } from 'react';
import '../../Styles/Input.css'

export class TextInput extends Component {
    constructor(props) {
        super(props)

        if (props.inputClass) {
            this.inputClass = "text-input" + ' ' + this.props.inputClass
        } else {
            this.inputClass = 'text-input'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate() {
        if (this.inputClass == 'text-input' && this.props.inputClass != undefined) {
            this.inputClass = "text-input" + ' ' + this.props.inputClass
        }
    }

    /**
     * Click event handler
     * Can optionally pass data using props.data
     */
    handleChange(e){
        if (this.inputClass.includes("form-item-empty") && e.target.value != "") {
            this.inputClass = "text-input"
        }
        this.props.ChangeFunction(e.target.value, this.props.data)
    }

    render() {
        return(
            <input 
                onChange = {this.handleChange} 
                className = {this.inputClass}
                id = {this.props.id}
                value = {this.props.value}
                type = {this.props.type}
                data = {this.props.data}
            />
        );
    }
}