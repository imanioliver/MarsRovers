import React, { Component } from 'react';

export default class GetImageButton extends Component {
    render(){
        return(
            <form onSubmit={this.props.fetchRoverImage}>
                <button type="submit" > Get Rover Image(s)</button>

                <p><strong>{this.props.rover}</strong></p>
            </form>
        )
    }

}
