import React, { Component } from 'react';
import { ActionRow } from '../Buttons/ActionRow';
import {FloatContainer} from '../Containers/FloatContainer'
import { JSONRow } from './JSONRow';

/**
 * Takes a JSON object and maps it into a set of inputs.
 * 
 * editable | bool | determines whether to use input or static forms. Input forms default to text input but
 * can be customized.
 * levels | number | determines how deep the map will go before calling it quits. default -1 for infinite.
 * data
 */
export class JSONDataTable extends Component {
    constructor(props) {
        super(props)

        this.MapObject = this.MapObject.bind(this)
        this.GetRow = this.GetRow.bind(this)
    }

    /**
     * 
     * @param {Number} index | number of row
     */
    GetRow(index) {
        if (index < (this.props.pageLength * this.props.currentPage) && index >= (this.props.pageLength * (this.props.currentPage-1))) {
            return(
                <JSONRow 
                    data={this.props.data[index]}
                    editable={this.props.editable}
                    ToggleForm={this.props.ToggleForm}
                    index={index}
                />
            )
        } else {
            return null
        }
        //console.log(index, this.state.index)
        
    }

    /**
     * Map data to a JSON Row
     * @returns JSONRow Component
     */
    MapObject() {
        return(this.props.data.map((obj, index) => 
            this.GetRow(index)
        ))
    }

    render() {
        return(
            <>
                {this.MapObject()}
            </>
        );
    }
}