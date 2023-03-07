import React, { Component } from 'react';



export class Image extends Component {
    constructor(props) {
        super(props)

        if (props.imageClass != undefined) {
            this.imageClass = "image " + props.imageClass
        } else {
            this.imageClass = "image"
        }
    }

    render() {
        return(
            <img src={this.props.src} className = {this.imageClass}/>
        );
    }
}