import React, { Component } from 'react';

export default class GetImageButton extends Component {
    render(){
        return(

                <button onSubmit={this.props.fetchRoverImage}>Fetch Rover Image</button>
        )
    }

}
