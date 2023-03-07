import React, { Component } from 'react';
import { SectionCard } from './SectionCard';
import { SectionHeader } from './SectionHeader';


/**
 * A container for holding section cards. These components can be used in constructing settings pages, collections, etc
 */
export class Section extends Component {
    constructor(props) {
        super(props)

        if (props.sectionClass) {
            this.sectionClass = "section" + ' ' + this.props.sectionClass
        } else {
            this.sectionClass = 'section'
        }

        this.MapObject = this.MapObject.bind(this)
        this.MapData = this.MapData.bind(this)
    }

    MapData(section) {
        return(
            <SectionCard
                sectionCardClass = {this.props.sections[section].sectionCardClass}
                info = {this.props.sections[section].info}
                key = {this.props.sections[section].info.title}
            >
                {this.props.sections[section].children}
            </SectionCard>
        )
    }

    /**
     * Loop through top level object, returning either a div or a button to open another table
     */
    MapObject() {
        return(Object.keys(this.props.sections).map((key, i) => (
            this.MapData(key)
        )))
    }

    render() {
        return(
            <>
                {this.props.header&&<SectionHeader title={this.props.header}/>}
                <div className={this.sectionClass} id={this.props.id}>
                    <div className="section-list">
                        {this.MapObject()}
                    </div>
                </div>
            </>
        );
    }
}