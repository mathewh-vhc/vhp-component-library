import React, { Component } from 'react';
import { TextButton } from '../../Buttons/TextButton';
import { DataTable } from './DataTable';



export class TableContainer extends Component {
    constructor(props) {
        super(props)

        this.id = props.id;

        this.state = {
            active:false,
            data:props.data||[],
            filtered:false,
            headers:props.headers||{}
        }

        /**
         * Bind functions here for access in child components.
         */
        this.ToggleTable = this.ToggleTable.bind(this)
        this.UpdateData = this.UpdateData.bind(this)
    }

    /////////TABLE FUNCTIONS/////////////////
    /**
     * Toggle visibility of the table.
     */
    ToggleTable(set){
        if (set) {
            this.setState({
                active:set
            });
        } else {
            this.setState({
                active:!this.state.active
            });
        }
        
    }

    /**
     * Sets the state of the data object used in the data table.
     * Passing null into the object resets the data to the initial data passed in as props.
     * @param {object} newData : object this.state.data is set to
     */
    UpdateData(newData) {
        if (newData == null || newData == undefined) {
            this.setState({
                data:this.props.data
            })
        } else {
            this.setState({
                data:newData
            })
        }
    }
    /////////////END FUNCTIONS///////////////////

    render() {
        return(
            <div className = "container" id = {this.id}>
                <TextButton 
                    text = {"Open Table"} 
                    ClickFunction = {this.ToggleTable}
                />
                <DataTable
                    active = {this.state.active}
                    data = {this.state.data}
                    headers = {this.state.headers}
                    id = "data-table-cont"
                    ToggleTable = {this.ToggleTable}
                    UpdateData = {this.UpdateData}
                />
            </div>
        );
    }
}