import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderImg from './RenderImg';


export class CardsLists extends Component {

    static propTypes = {
        cardTemp: PropTypes.func,
    }



    render() {
        const { card } = this.props;
        return (
            <div className="col-12 col-md-6 col-lg-3 no-padding">
                <div className="portfolio-content">
                    <RenderImg imgDir={card.cardDir} imgDes={card.cardDes} />
                    <div className="entry-content flex flex-column align-items-center justify-content-center">
                        <h3><a href="#">{card.cardType}</a></h3>
                        <ul className="flex flex-wrap justify-content-center">
                            {card.cardTags.map((tag, index) => (
                                <li key={index}><a href="#">{tag}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsLists;