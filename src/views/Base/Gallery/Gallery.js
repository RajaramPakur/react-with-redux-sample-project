import React, { Component } from 'react';
import Card from './Card';
import cards from '../../../_cards';

class Gallery extends Component {


    render() {
        return (
            <div>
                <Card images={cards.images} route={this.props.route}/>
            </div>
        )
    }
}

export default Gallery;
