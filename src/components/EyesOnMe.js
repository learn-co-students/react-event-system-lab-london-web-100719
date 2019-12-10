// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    focusE = () => console.log("Good!")
    blurE = () => console.log("Hey! Eyes on me!")

    render() {
        return (
            <button onFocus={this.focusE} onBlur={this.blurE} >
                
            </button>
        )
    } 



}