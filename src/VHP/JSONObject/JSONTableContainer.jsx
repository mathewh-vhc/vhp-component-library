import React, { Component } from 'react';
import {FloatContainer} from '../Containers/FloatContainer';
import { JSONDataTable } from './JSONDataTable';
import { Card } from '../Cards/Card';
import { JSONObjectForm } from './JSONObjectForm';
import { ActionRow } from '../Buttons/ActionRow';

import { TextButton } from '../Buttons/TextButton';
import { CardContent } from '../Cards/CardContent';

/**
 * Initial implementation of a JSON object viewer. Currently supports infinite nesting for views, but only allows
 * editing nested objects one layer deep.
 * @param {title} | string, title of card used to display object
 * @param {data} | array, JSON collection to display
 */
export class JSONTableContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:props.data,
            formActive:false,
            currentIndex:0,
            pages:null,
            currentPage:1,
            pageLength:10
        }

        this.ToggleForm = this.ToggleForm.bind(this)
        this.UpdateData = this.UpdateData.bind(this)
        this.CreateObject = this.CreateObject.bind(this)
        this.SetPage = this.SetPage.bind(this)
        this.GeneratePageButtons = this.GeneratePageButtons.bind(this)
    }

    componentDidMount() {
        if (this.props.data.length > this.state.pageLength) {
            let maxPages = Math.ceil(this.props.data.length / this.state.pageLength)
            this.setState({
                pages:maxPages
            })
        }
        
    }

    componentDidUpdate() {
        let newMaxPages = Math.ceil(this.props.data.length / this.state.pageLength)
        if (newMaxPages > this.state.pages) {
            this.setState({
                pages:newMaxPages
            })
        }
    }

    /**
     * Generates buttons for switching between pages. Can assign a page length, or use default
     * TODO: When on first page or last page, return only a single ActionButton
     * @param {Number} n | length of each page | default = 100
     */
    GeneratePageButtons() {
        return(
            <ActionRow 
                data = {[
                    {
                        text:"<",
                        type:"TextButton",
                        data:this.state.currentPage-1,
                        ClickFunction:this.SetPage
                    },
                    {
                        text:">",
                        type:"TextButton",
                        data:this.state.currentPage+1,
                        ClickFunction:this.SetPage
                    }
                ]}
            />
        )
    }

    /**
     * 
     * @param {Number} page | page to set to
     */
    SetPage(page=1) {
        if (page < 1) {
            page = 1
        } else if (page > (this.state.pages)) {
            page = (this.state.pages)
        }

        this.setState({
            currentPage:page
        },()=>{
            console.log(this.state.currentPage)
        })
    }

    /**
     * Creates a blank object from a template and inserts it at the end of the array
     */
    CreateObject() {
        //Create a blank object
        let blank_obj = JSON.parse(JSON.stringify(this.state.data[0]))
        for (let key in blank_obj) {
            if (typeof blank_obj[key] == "boolean") {
                blank_obj[key] = false
            } else {
                blank_obj[key] = ""
            }
        }

        this.UpdateData({data:blank_obj, index:this.state.data.length})

        this.ToggleForm(this.state.data.length)
    }

    /**
     * Updates the item in a list at the specified index.
     * Checks and calls a provided update function
     * @param {Object:{data:Object, index: number}} props
     */
    UpdateData(props) {
        if (this.props.UpdateFunction != undefined) {
            this.props.UpdateFunction(props)
        } else {
            console.log("No external save function given!")
        }
        let cloneData = JSON.parse(JSON.stringify(this.state.data))
        cloneData[props.index] = props.data
        this.setState({
            data: cloneData
        })
    }

    /**
     * Toggle visibility of JSON editor form
     * @param {Number} setIndex | index of item that will be displayed in the form
     */
    ToggleForm(setIndex=0) {
        this.setState({
            formActive:!this.state.formActive,
            currentIndex:setIndex
        })
    }

    render() {
        return(
            <>
                <Card 
                    titlebar={true} 
                    title={this.props.title} 
                    cardClass="JSON-card" 
                    id = {this.props.id}
                    actions = {this.props.cardActions}
                    data = {this.props.cardActionData}
                >
                    {this.state.pages&&this.GeneratePageButtons()}
                    {this.props.CreateEntry&&<TextButton 
                        text="Create New Entry"
                        ClickFunction={this.CreateObject}
                    />}
                    <CardContent>
                        <JSONDataTable 
                            data={this.state.data}
                            index={this.state.currentIndex}
                            ToggleForm={this.ToggleForm}
                            currentPage={this.state.currentPage}
                            pageLength={this.state.pageLength}
                            pages={this.state.pages}
                        />
                    </CardContent>
                </Card>
                {this.state.formActive&&<FloatContainer>
                    <JSONObjectForm 
                        data={this.state.data[this.state.currentIndex]}
                        index={this.state.currentIndex}
                        ToggleForm={this.ToggleForm}
                        UpdateData = {this.UpdateData}
                    />
                </FloatContainer>}
            </>
        );
    }
}