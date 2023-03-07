import React, { Component } from 'react';


export class ArrayHeader extends Component {
    constructor(props) {
        super(props)

        if (props.headerClass != undefined) {
            this.headerClass = "array-header " + props.headerClass
        } else {
            this.headerClass = "array-header"
        }

        this.GenerateHeaders = this.GenerateHeaders.bind(this)
    }

    GenerateHeaders() {
        return this.props.text.map(obj=>{
			return (
                <div className='header-text array' key = {obj}>
                    {obj}
                </div>
            )
		})
    }

    render() {
        return(
            <div className = {this.headerClass} id={this.props.id}>
                {this.GenerateHeaders()}
            </div>
        );
    }
}