import React, { Component } from 'react';
import { ImageButton } from '../Buttons/ImageButton';
import { TextButton } from '../Buttons/TextButton';


/**
 * Creates a row of buttons for a menu bar
 * This would emulate the menu tab we used for switching between tabs
 * We should be able to use this as a base class and emulate most of our
 * menu styles with simply CSS
 * Note the menu bar doesn't care what the view is - it's simply a collection of buttons that tells its
 * parent when to act. What its parent does, does not matter to the menu.
 */
export class MenuTabBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected:[],
            buttons:[]
        }

        this.SetTab = this.SetTab.bind(this)
        this.RenderButtons = this.RenderButtons.bind(this)
    }

    /**
     * On mount, fill the selected
     */
    componentDidMount() {
        //Create the selected list
        let newSelected = []
        for (let i = 0; i < this.props.tabs.length; i++) {
            newSelected.push(undefined)
        }

        newSelected[0] = "selected"

        this.setState({
            selected:newSelected 
        },() => {
            this.setState({
                buttons:this.RenderButtons()
            })
        });
    }

    /**
     * Set the tab in the button to allow button to be selected
     * @param {Number} TabID 
     */
    SetTab(TabID) {
        let arr = this.state.selected.slice();
        for (let i = 0; i < arr.length; i++) {
            if (i == TabID) {
                arr[i] = "selected"
            } else {
                arr[i] = undefined
            }
        }

        this.setState({
            selected:arr
        },() => {
            this.setState({
                buttons:this.RenderButtons()
            })
        });

        //Loop through and change classes

        this.props.SetTab(TabID)
    }

    RenderButtons() {
        return(this.props.tabs.map((val, key) => {
            if (this.props.images) {
                return (
                    <ImageButton
                        src = {this.props.images[key]}
                        key = {key+val} 
                        data={key}
                        text={this.props.tabs[key]}
                        ButtonType = "menu-button"
                        ClickFunction = {this.SetTab}
                        buttonClass = {this.state.selected[key]}
                        role = "tab"
                        aria-level = {val}
                    />
                )
            } else {
                return <TextButton
                        key = {key+val} 
                        data={key}
                        text={this.props.tabs[key]}
                        ButtonType = "menu-button"
                        ClickFunction = {this.SetTab}
                        buttonClass = {this.state.selected[key]}
                        role = "tab"
                        aria-level = {val}
                />
            }
        }))
    }

    render() {
        return(
            <>
                <div className = {"menu-bar" + " " + this.props.MenuStyle} id = {this.props.id} role="tablist">
                    {this.state.buttons}
                </div>
            </>
        );
    }
}