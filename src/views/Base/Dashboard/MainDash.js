import React, { Component, Suspense } from 'react';
import CountryButtons from './CountryButtons';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';

import { connect } from 'react-redux';
import { fetchAllNews } from '../../../action/newsFeedActions';
import { Dashboard } from './Dashboard';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

class MainDash extends Component {

    state = {
        action: {
            name: this.props.route.name,
            countryCode: 'US',
        }
    }
    sendCountryCode = async (e) => {
        this.props.fetchAllNews(e.value);
    }
    componentDidMount() {
        this.props.fetchAllNews(this.state.action.countryCode);
    }

    render() {
        return (
            <div className="outer-container blog-page">
                <div className="container-fluid">
                    <br />
                    <CountryButtons countryCode={this.sendCountryCode.bind(this)} />
                    <div className="float-right">
                        <Clock
                            date={new Date()}
                            format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
                            ticking={true}
                        />
                    </div>
                    <hr />
                    <h3>{this.state.action.name}</h3>
                    <Suspense fallback={loading()}>
                        <Dashboard news={this.props.news} />
                    </Suspense>
                </div>
            </div>
        )
    }
}

MainDash.propTypes = {
    fetchAllNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    news: state.news.news,
});

export default connect(mapStateToProps, { fetchAllNews })(MainDash);
