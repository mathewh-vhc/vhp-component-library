import React, { Component } from 'react';


/**
 * A container for holding card content.
 */
export class FloatContainer extends Component {
    constructor(props) {
        super(props)

        if (props.containerClass) {
            this.containerClass = "float-container" + ' ' + this.props.containerClass
        } else {
            this.containerClass = "float-container"
        }
    }

    render() {
        return(
            <div className={this.containerClass} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}