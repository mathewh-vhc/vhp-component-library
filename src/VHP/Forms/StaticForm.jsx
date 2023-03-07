import React, { Component } from 'react';


/**
 * A React fragment which takes data and returns it in a static, unchangeable form.
 * formdata :  [
 *                  {
 *                      value: displayed text
 *                      title: the title displayed for the content
 *                  }
 *             ]
 */
export class StaticForm extends Component {
    constructor(props) {
        super(props)

        this.MapFormData = this.MapFormData.bind(this)
    }

    MapFormData() {
        const formdata = this.props.formdata
        const items = formdata.map((obj) => 
            <div className='user-info-item'>
                <div>{obj.title}</div>
                <div>{obj.value}</div>
            </div>
        );

        return items
    }

    render() {
        return(
            <>
                {this.MapFormData()}
            </>
        );
    }
}