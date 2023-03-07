import React, { Component } from 'react';

/**
 * A container for holding card content.
 */
export class CardContent extends Component {
    constructor(props) {
        super(props)

        if (props.cardContentClass) {
            this.cardContentClass = "card-content" + ' ' + this.props.cardContentClass
        } else {
            this.cardContentClass = 'card-content'
        }
    }

    render() {
        return(
            <div className={this.cardContentClass} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}