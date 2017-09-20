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
                // <div key={key}>
                //     <img className="card-img-top" src={image.img_src} alt=""/>
                //     <div className="card-block">
                //         <p className="card-text"> Taken on: {image.earth_date}</p>
                //     </div>
                // </div>


            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                <a href="/"> heyhey</a>
                    <div className="carousel-item active">
                        <label> Image {key}</label>
                        <img className="d-block img-fluid" src={image.img_src} alt=""/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
                </div>
            )
        })

        return (


<div>
                {display}
            </div>


        )
    }
}
