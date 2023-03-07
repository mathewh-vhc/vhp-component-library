import React, { Component } from 'react';
import { Card } from '../Cards/Card';
import { InputForm } from '../Forms/InputForm';
import { TextButton } from '../Buttons/TextButton';
import {ActionRow} from '../Buttons/ActionRow'
import { CardContent } from '../Cards/CardContent';

/**
 * Generates a set of inputs, divs, and TextButtons to display a JSON object
 * @param {data} | JSON object of data to display
 * @param {index} | number, index of item in the array it's part of
 * @param {ToggleForm} | function, toggles the form
 * @param {UpdateData} | function, called when saving the new object to its original list in the parent component
 */
export class JSONObjectForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:{...JSON.parse(JSON.stringify(props.data))},
            nested:false
        }

        this.staticData = JSON.parse(JSON.stringify(props.data))

        this.MapData = this.MapData.bind(this)
        this.MapObject = this.MapObject.bind(this)
        this.SetInput = this.SetInput.bind(this)
        this.UpdateViewData = this.UpdateViewData.bind(this)
    }

    /**
     * Takes a key,value pair and updates the state of [key]
     * @param {string} value | new input
     * @param {string} key | key to find input in state
     */
    SetInput(value, key) {
        var newData = {...this.state.data}
        newData[key] = value
        this.setState({
            data: newData
        },()=>{
            //Loop through static data, checking for objects where appropriate
            for (let outerKey in this.staticData) {
                if (this.staticData[key] == undefined) {
                    //Loop through inner object
                    if(this.staticData[outerKey].constructor == Object) {
                        for (let innerKey in this.staticData[outerKey]) {
                            //Match innerkey to key and update value
                            if (innerKey == key) {
                                //console.log("FOUND AT ", this.staticData[outerKey])
                                this.staticData[outerKey][key] = value;
                                break;
                            }
                        }
                    } else if (this.staticData[outerKey].constructor == Array) {
                        this.staticData[outerKey][key] = value;
                        break;
                    }
                } else {
                    this.staticData[key] = value
                    break;
                }
            }
        })
    }

    /**
     * Sets and updates the data currently in view by updating data in state
     * Use nested flag to indicate nesting
     * TODO: Switch flag to int and add support for nesting levels
     * @param {table} props | {data: *, nested: bool}
     */
    UpdateViewData(props) {
        //console.log("Updating ViewData", props)
        this.setState({
            data:props.data,
            nested:props.nested
        })
    }
    
    /**
     * Searches through this.state.data and returns an object for FormData to interpret
     * @param {String} key | key name in list
     * @returns 
     */
    MapData(key) {
        if (this.state.data[key] && this.state.data[key].constructor == Object) {
            return({
                inputType:"TextButton",
                ClickFunction:this.UpdateViewData,
                data:{data:this.state.data[key], nested:true},
                text:key
            })
        } else if (this.state.data[key] && this.state.data[key].constructor == Array) {
            return({
                inputType:"TextButton",
                ClickFunction:this.UpdateViewData,
                data:{data:this.state.data[key], nested:true},
                text:key
            })
        } else if (typeof this.state.data[key] == 'boolean') {
            return({
                inputType:"Checkbox",
                value:this.state.data[key],
                title:key,
                ClickFunction:this.SetInput,
                data:key
            })
        } else {
            return({
                inputType:"TextInput",
                value:this.state.data[key],
                title:key,
                ChangeFunction:this.SetInput
            })
        } 
    }

    /**
     * Loop through this.state.data and create an input form
     */
    MapObject() {
        let formdata = [];
        Object.keys(this.state.data).map((key, i) => (
            formdata.push(this.MapData(key, i))
        ))

        return <InputForm formdata={formdata}/>
    }

    render() {
        return(
            <Card 
                titlebar={true} 
                title="Edit JSON Object" 
                cardClass="JSON-edit-card"
                actions = {{minimize: null, close:this.props.ToggleForm}}
                data = {{minimize:null, close:null}}
            >
                {this.state.nested&&<TextButton
                    text="<"
                    ClickFunction = {this.UpdateViewData}
                    data = {{data:this.staticData, nested:false}}
                />}
                <CardContent cardContentClass="JSON-edit-form">
                    {this.MapObject()}
                </CardContent>
                <ActionRow 
                    data={[
                        {
                            text:"Save",
                            ClickFunction:this.props.UpdateData,
                            data:{data:this.staticData, index:this.props.index}
                        }
                    ]}
                />
            </Card>
        );
    }
}