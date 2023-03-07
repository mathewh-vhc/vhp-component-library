import React, { Component } from 'react';
import { ImageButton } from '../Buttons/ImageButton';
import {MenuTabBar} from './MenuTabBar'


export class MenuSideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            MenuStyle:this.props.MenuStyle
        }

        this.SetMenuCollapse = this.SetMenuCollapse.bind(this)
    }

    SetMenuCollapse() {
        if (this.state.MenuStyle == "side-bar") {
            this.setState({
                MenuStyle:"side-bar collapsed"
            })
        } else {
            this.setState({
                MenuStyle:"side-bar"
            })
        }
    }


    render() {
        return(
            <>
                <ImageButton
                    src="https://www.vhpportal.com/repo/assets/icons/menu-burger.png"
                    ClickFunction = {this.SetMenuCollapse}
                    buttonClass = "side-bar-menu"
                />
                <MenuTabBar
                    SetTab = {this.props.SetTab}
                    MenuStyle = {this.state.MenuStyle}
                    tabs = {this.props.tabs}
                    images = {this.props.images}
                />
            </>
        )
    }
}