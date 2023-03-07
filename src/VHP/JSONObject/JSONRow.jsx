import React, { Component } from 'react';
import { TextButton } from '../Buttons/TextButton';

//TODO: Add support for true/false values
export class JSONRow extends Component {
    constructor(props) {
        super(props)

        if (this.props.rowType == "header") {
            this.rowClass = "tablerow header jsonrow"
        } else {
            this.rowClass = "tablerow jsonrow"
        }

        this.MapData = this.MapData.bind(this)
    }

    MapData(keyName) {
        if (this.props.data[keyName]) {
            if (this.props.data[keyName].constructor == Object) {
                return(
                    <div key={keyName} className={"row-item object " + keyName}>{"Object: "+ keyName}</div>
                )
            } else if (this.props.data[keyName].constructor == Array) {
                return(
                    <div key={keyName} className={"row-item array " + keyName}>{"Array: "+ keyName}</div>
                )
            }
            else {
                return(
                    <div key = {keyName} className={"row-item " + keyName}>{this.props.data[keyName]}</div>
                )
            }
        } else {
            //For booleans, display either "TRUE" or "FALSE"
            if (typeof this.props.data[keyName] == 'boolean') {
                return <div key = {keyName} className={"row-item " + keyName}>
                    {this.props.data[keyName] ? "TRUE":"FALSE"}
                </div>
            }
            //console.log("display", keyName)
            return <div key = {keyName} className={"row-item " + keyName}></div>
        }
    }

    /**
     * Returns a row created from props.data
     * @returns render object
     */
    render() {
        return(
            <div className = {this.rowClass} id = {this.props.id}>
                {Object.keys(this.props.data).map((keyName, i) => (
                    this.MapData(keyName)
                ))}
                <TextButton 
                    text="View"
                    buttonClass="JSON-view"
                    ClickFunction = {this.props.ToggleForm}
                    data={this.props.index}
                />
            </div>
        );
    }
}