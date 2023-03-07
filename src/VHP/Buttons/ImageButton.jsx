import React, { Component } from 'react';
import { ButtonContainer } from './ButtonContainer';

export class ImageButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ButtonContainer {...this.props}>
                <img src = {this.props.src} className = "image-button-icon"></img>
                {this.props.text&&<div>{this.props.text}</div>}
            </ButtonContainer>
        )
    }
}