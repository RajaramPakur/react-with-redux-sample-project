import React, { Component } from 'react';
import CardLists from '../Gallery/CardsLists';
import XlSearchField from '../SearchField/XlSearchField';

export class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            images: props.images,
        };
    }

    getSearchResult = async (e) => {
        e.preventDefault();
        var query = e.target.value;
        this.setState({ search: query });
    };


    render() {
        let images = (this.state.images);
        let filterdImages = images.filter((image) => {
            if (this.state.search === '') {
                return image;
            } else {
                var search = this.state.search.toLowerCase();
                let item = image.cardTags.find(tag => {
                    if (tag.toLowerCase().includes(search)) {
                        return tag;
                    } else
                        return '';
                });
                if (image.cardTitle.toLowerCase().includes(search) || item) {
                    return image;
                } else {
                    return false;
                }
            }
        });
        let cardListsTemp;
        if (filterdImages) {
            cardListsTemp = filterdImages.map((card, index) => {
                return (
                    <CardLists card={card} key={index} />
                );
            });
        }
        return (
            <div>
                <XlSearchField loadResult={this.getSearchResult.bind(this)} />
                <div className="outer-container home-page">
                    <div className="container-fluid">
                        <h3>{this.props.route.name}</h3>
                        <div className="row">
                            {cardListsTemp}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;