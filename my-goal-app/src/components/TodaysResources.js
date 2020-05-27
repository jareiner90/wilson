import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselResource from './CarouselResource';

export default class TodaysResources extends Component {

    renderResources = () => {
        return this.props.resources.map(resource => {
            return <CarouselResource name={resource.name} url={resource.url}/>
        })
    }

    render() {
        
        return (
        <div>
            <Carousel showThumbs={false} style={{width: '100%', height: '400px'}}>
                {this.renderResources()}
            </Carousel>
        </div> 
    )
    }


}        
