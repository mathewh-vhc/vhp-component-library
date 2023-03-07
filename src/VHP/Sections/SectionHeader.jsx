import React, { Component } from 'react';

/**
 * A container for holding card content.
 */
export class SectionHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='section-header'>{this.props.title}</div>
        );
    }
}