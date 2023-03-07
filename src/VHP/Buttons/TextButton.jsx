import React, { Component } from 'react';
import { ButtonContainer } from './ButtonContainer';

export class TextButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ButtonContainer {...this.props}>
                {this.props.text}
            </ButtonContainer>
        )
    }
}