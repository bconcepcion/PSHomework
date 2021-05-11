import React, { Component } from 'react'

export class DivOne extends Component {
    constructor(props) {
        super(props){
            this
        }
    }
    render() {
        return (
            <div onClick={this.changeIt}>
                <h3>{this.state.tardis.name}</h3>
            </div>
        )
    }
}

export default DivOne

//changeit function in div three
//div one renders div two and dive two renders two div three. on  click only on div thre