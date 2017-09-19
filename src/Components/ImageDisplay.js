import React, { Component } from 'react';

export default class ImageDisplay extends Component{
    render(){

        // let image = '';
        let key=0;
        let display = this.props.images.map((image) => {
            // console.log(this.props.images);
            key++;
            console.log(image.img_src);
            return(
                <div key={key}>
                    <img className="card-img-top" src={image.img_src} alt=""/>
                    <div className="card-block">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            )
        })

        return (


            <div className="card">
              {display}
            </div>

        )
    }
}
