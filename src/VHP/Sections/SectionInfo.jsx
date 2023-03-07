import React, { Component } from 'react';

/**
 * A container for holding card content.
 */
export class SectionInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='section-info'>
                <div className='section-info-title'>{this.props.info.title}</div>
                <div className='section-info-descr'>{this.props.info.descr}</div>
            </div>
        );
    }
}