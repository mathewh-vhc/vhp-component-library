import React, { Component } from 'react';



export class BasicHeader extends Component {
    constructor(props) {
        super(props)

        if (props.headerClass != undefined) {
            this.headerClass = "header " + props.headerClass
        } else {
            this.headerClass = "header"
        }
    }

    render() {
        return(
            <div className = {this.headerClass} id={this.props.id}>
                <div className='header-text'>
                    {this.props.text}
                </div>
            </div>
        );
    }
}