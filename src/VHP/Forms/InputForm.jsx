import React, { Component } from 'react';
import { DropDown } from '../Dropdowns/DropDown';
import { TextArea } from '../Inputs/TextArea';
import { TextInput } from '../Inputs/TextInput';
import { SearchBar } from '../Inputs/SearchBar';
import { TextButton } from '../Buttons/TextButton';
import { Checkbox } from '../Inputs/Checkbox';

/**
 * A React fragment which takes data and returns it in a dynamic form with inputs.
 * TODO: Add support for ActionButtons - have an ActionButton input type
 * formdata :  [
 *                  {
 *                      value: displayed text
 *                      title: the title displayed for the content
 *                      inputType: the type of input to use
 *						type: the type passed into the input object
 *						EventFunction: the EventFunction passed into the input object 
						inputClass: the class assigned to the input
 *                  }
 *             ]
 */
export class InputForm extends Component {
    constructor(props) {
        super(props)

        this.MapFormData = this.MapFormData.bind(this)
		this.GetInput = this.GetInput.bind(this)
    }

	GetInput(inputData) {
		if (inputData.inputType == "TextInput") {
			//TODO: Remove this conditional
			if (inputData.data == undefined) {
				inputData.data = inputData.title
			}
			return (
				<TextInput 
					value = {inputData.value}
					ChangeFunction = {inputData.ChangeFunction}
					type = {inputData.type || 'text'}
					key = {inputData.title}
					data = {inputData.data}
					inputClass = {inputData.formItemClass}
				/>
			)
		} else if (inputData.inputType == "TextArea") {
			return (
				<TextArea
					value = {inputData.value}
					ChangeFunction = {inputData.ChangeFunction}
					key = {inputData.title}
					data = {inputData.data}
					inputClass = {inputData.formItemClass}
				/>
			)
		} else if (inputData.inputType == "DropDown"){
			return (
				<DropDown 
					list={inputData.list} 
					selected={inputData.selected}
					ChangeFunction = {inputData.ChangeFunction}
					data = {inputData.data}
					dropDownClass = {inputData.formItemClass}
				/>
			)
		} else if (inputData.inputType == "SearchBar") {
			return (
				<SearchBar 
					FilterFunction = {inputData.FilterFunction}
					searchKey = {inputData.searchKey}
					searchClass = {inputData.searchClass}
					filterType = {inputData.filterType}
					id = {inputData.id}
					type = {inputData.type || 'text'}
				/>
			)
		}  else if (inputData.inputType == "TextButton") {
			return (
				<TextButton
					text = {inputData.text}
					ClickFunction = {inputData.ClickFunction}
					buttonClass = {inputData.buttonClass}
					data = {inputData.data}
					value = {inputData.value}
					id = {inputData.id}
				/>
			)
		} else if (inputData.inputType == "Checkbox") {
			return (
				<Checkbox
					ClickFunction = {inputData.ClickFunction}
					inputClass = {inputData.inputClass}
					data = {inputData.data}
					key = {inputData.title}
					id = {inputData.id}
					value = {inputData.value}
				/>
			)
		} else {
			return (
				<div className={inputData.class}>{inputData.value}</div>
			)
		}
	}

    MapFormData() {
        const formdata = this.props.formdata
        const items = formdata.map((obj, index) => 
            <label className='form-info-item' key = {index}>
                <span className='form-info-title' htmlFor={obj.title}>{obj.title}</span>
                {this.GetInput(obj)}
            </label>
        );

        return items
    }

    render() {
        return(
            <>
                {this.MapFormData()}
				{this.props.children}
            </>
        );
    }
}