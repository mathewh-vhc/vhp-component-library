import React, { Component } from 'react';
import { SectionInfo } from './SectionInfo';

/**
 * A container for holding card content.
 */
export class SectionCard extends Component {
    constructor(props) {
        super(props)

        if (props.sectionCardClass) {
            this.sectionCardClass = "section-card" + ' ' + this.props.sectionCardClass
        } else {
            this.sectionCardClass = 'section-card'
        }
    }

    render() {
        return(
            <>
                <div className={this.sectionCardClass} id={this.props.id}>
                    {this.props.info&&<SectionInfo info={this.props.info}/>}
                    {this.props.children}
                </div>
            </>
        );
    }
}