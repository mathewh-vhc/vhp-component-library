import React, { Component } from 'react';
import { TextButton } from './TextButton';
import { SearchBar } from '../Inputs/SearchBar';


/**
 * Takes an array of actions and creates a set of Action Buttons
 * data : [
 * 		{
 * 			text 			: string
 * 			id   			: string
 * 			ClickFunction 	: function()
 * 			type			: type of object to create
 * 			className		: the class name to be added to the button [not implemented yet]
 * 			data			: the data passed in to the ClickFunction
 * 		}
 * 	]
 */
export class ActionRow extends Component {
	constructor(props) {
		super(props)

		this.MapActionData = this.MapActionData.bind(this)
	}

	MapActionData() {
		const data = this.props.data
		const items = data.map((obj) => {
			if (obj.type == "ActionButton" || obj.type == undefined || obj.type == "TextButton") {
				return(<TextButton
					text = {obj.text}
					id = {obj.id}
					ClickFunction = {obj.ClickFunction}
					buttonClass = {obj.buttonClass}
					data = {obj.data}
					key = {obj.keyName+obj.text}
				/>)
			} else if (obj.type == "SearchBar") {
				return(<SearchBar
                    FilterByText = {obj.FilterByText}
					placeholder = {obj.placeholder}
					searchKey = {obj.searchKey}
                />)
			}
		}
			
		);

		return items
	}

	/**
	 * Returns an Action Row
	 * @returns render object
	*/
	render() {
		return(
			<div className = "action-row" id = {this.props.id}>
				{this.MapActionData()}
			</div>
		);
	}
}