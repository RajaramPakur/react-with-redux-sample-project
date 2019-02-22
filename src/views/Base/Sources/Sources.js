import React, { Component } from 'react';
import SourcesList from './SourcesList';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchAllNewsSources } from '../../../action/newsFeedActions';

class Sources extends Component {


    componentDidMount() {
        this.props.fetchAllNewsSources();
    }

    render() {
        const { sources } = this.props;
        let sourcesList;
        if (sources.sources) {
            sourcesList = sources.sources.map((source, index) => {
                return (
                    <SourcesList sources={source} key={index} />
                );
            });
        }
        return (
            <div className="outer-container home-page">
                <div className="container-fluid">
                    <h3>{this.props.route.name}</h3>
                    <hr />
                    <div className="row">
                        {sourcesList}
                    </div>
                </div>
            </div>
        )
    }
}

Sources.propTypes = {
    fetchAllNewsSources: PropTypes.func.isRequired,
    sources: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    sources: state.news.sources,
})

export default connect(mapStateToProps, { fetchAllNewsSources })(Sources);
