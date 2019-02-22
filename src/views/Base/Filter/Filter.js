import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchAllNews, searchFromTopNews } from '../../../action/newsFeedActions';
import { Dashboard } from '../Dashboard/Dashboard';
import XlSearchField from '../SearchField/XlSearchField';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

class Filter extends Component {

    state = {
        action: {
            name: this.props.route.name,
            countryCode: 'US',
        }
    }

    getSearchResult = async (query) => {
        if (query === '') {
            this.props.fetchAllNews(this.state.action.countryCode);
        } else {
            this.props.searchFromTopNews(query);
        }
    };
    componentDidMount() {
        this.props.fetchAllNews(this.state.action.countryCode);
    }

    render() {
        return (
            <div>
                <XlSearchField loadResult={this.getSearchResult.bind(this)} />
                <div className="outer-container blog-page">
                    <div className="container-fluid">
                        <h3>{this.state.action.name}</h3>
                        <Suspense fallback={loading()}>
                            <Dashboard news={this.props.news} />
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    fetchAllNews: PropTypes.func.isRequired,
    searchFromTopNews: PropTypes.func,
    news: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    news: state.news.news,
});

export default connect(mapStateToProps, { fetchAllNews, searchFromTopNews })(Filter);
