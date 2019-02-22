import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DashCard extends Component {
    static propTypes = {
        card: PropTypes.object,
    }

    render() {
        const { card, flexType } = this.props;
        var author;
        if (card.author !== null) {
            author = `By ${card.author}`;
        } else {
            author = '';
        }

        return (
            <div className="col-12 col-xl-6 no-padding">
                <div className={`blog-content flex ${flexType}`}>
                    <figure>
                        <img src={card.urlToImage} alt={card.description} />
                    </figure>
                    <div className="entry-content flex flex-column justify-content-between align-items-start">
                        <header>
                            <h3><a href={card.url} target="_blank">{card.title}</a></h3>
                            <div className="posted-by">{author}</div>
                        </header>
                        <footer className="flex flex-wrap align-items-center">
                            <div className="posted-on">
                                {new Intl.DateTimeFormat('en-GB', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit', hour: '2-digit', minute: '2-digit'
                                }).format(new Date(card.publishedAt))}
                            </div>
                            <ul className="flex flex-wrap align-items-center">
                                <li><a href="#">{card.source.name}</a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashCard
