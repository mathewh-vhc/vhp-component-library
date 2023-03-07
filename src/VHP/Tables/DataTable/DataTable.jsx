import React, { Component } from 'react';
import { TableRow } from './TableRow';
import { CardContent } from '../../Cards/CardContent';



export class DataTable extends Component {
    constructor(props) {
        super(props)

        this.id = props.id;
        this.FilterByText = this.FilterByText.bind(this)

        this.staticData = JSON.parse(JSON.stringify(this.props.data));
    }

    /**
     * Filters this.props.data based on the input
     * May move this into the search bar itself
     * @param {event} e : JS change event passed from Search Bar
     */
    FilterByText(e, searchKey) {
        let newData = null;
        console.log("SEARCH TERM:", e.target.value)
        if (e.target.value == "") {
            newData = null
        } else {
            newData = []
            for (let obj in this.staticData) {
                //Search through the properties of each object
                for (let key in this.staticData[obj]) {
                    if (key == searchKey || searchKey == undefined) {
                        if (this.staticData[obj][key].toLowerCase().includes(e.target.value.toLowerCase())) {
                            newData.push(JSON.parse(JSON.stringify(this.staticData[obj]))) //Push clone of object to new array
                            break;
                        }
                    }
                }
            }
        }
        this.props.UpdateData(newData)
    }

    /**
     * Conditional render to allow container to be toggled
     * @returns render object
     */
    render() {
        if (this.props.active == false) {
            return null
        } else {
            return(
                <>
                    {this.props.headers&&<TableRow data = {this.props.headers} rowType = "header" id = {this.props.headerID}/>}
                    <CardContent cardContentClass = "data-table" id = {this.props.id}>
                        {this.props.data.map((val, key) => {
                            return (
                                <TableRow 
                                    key = {key}
                                    keyName = {key}
                                    data={val} 
                                    headers={this.props.headers} 
                                    id = {this.props.id + val._id}
                                    testid = {this.props.id + val._id}
                                />
                            )
                        })}
                    </CardContent>
                </>
            );
        }
    }
}