import React, { Component } from 'react';
import { ActionRow } from '../../Buttons/ActionRow';

export class TableRow extends Component {
    constructor(props) {
        super(props)

        if (this.props.rowType == "header") {
            this.rowClass = "tablerow header"
        } else {
            this.rowClass = "tablerow"
        }

        this.MapData = this.MapData.bind(this)
        this.MapActions = this.MapActions.bind(this)
    }

    MapData(keyName) {
        if (this.props.headers == undefined|| keyName in this.props.headers) {
            return(
                <div key = {keyName} className={"row-item " + keyName}>{this.props.data[keyName]}</div>
            )
        }
    }

    MapActions() {
        if (this.props.data.actions != undefined) {
            return(
                <ActionRow data={this.props.data.actions} keyName = {this.props.keyName}/>
            )
        }
    }

    /**
     * Returns a row created from props.data
     * @returns render object
     */
    render() {
        return(
            <div className = {this.rowClass} id = {this.props.id} data-testid = {this.props.testid}>
                {Object.keys(this.props.data).map((keyName, i) => (
                    this.MapData(keyName)
                ))}
                {this.MapActions(this.props.keyName)}
            </div>
        );
    }
}