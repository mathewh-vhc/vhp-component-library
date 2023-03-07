import React, { Component } from 'react';

export class CardDialogue extends Component {
    constructor(props) {
        super(props)

        if (props.cardClass) {
            this.cardClass = "card dialogue" + ' ' + this.props.cardClass
        } else {
            this.cardClass = 'card dialogue'
        }
    }

    render() {
        return(
            <div className={this.cardClass} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}