import React, { Component } from 'react';

import DashCard from './DashCard';
import PropTypes from 'prop-types';

export class Dashboard extends Component {

    render() {
        let cardListsTemp;
        var count = 0, position = 0;
        var flexType = '';
        if (this.props.news.articles) {
            cardListsTemp = this.props.news.articles.map((card, index) => {
                if (count > 1) {
                    count = 0;
                    position++;
                }
                if ((position % 2) !== 0) {
                    flexType = "flex-row-reverse"
                } else {
                    flexType = "";
                }
                count++;
                return (
                    <DashCard card={card} key={index} flexType={flexType} />
                );
            });
        }

        return (
            <div className="row">
                {cardListsTemp}
            </div>
        )
    }
}

Dashboard.propTypes = {
    news: PropTypes.object.isRequired,
}

export default (Dashboard);
