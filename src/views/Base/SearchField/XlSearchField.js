import React, { Component } from 'react'

export class XlSearchField extends Component {

    handleSearch = (e) => {
        e.preventDefault();
        console.log(this.refs.search.value);
        this.props.loadResult(this.refs.search.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 s01">
                    <form onSubmit={this.handleSearch.bind(this)}>
                        <div className="inner-form">
                            <div className="input-field first-wrap">
                                <input ref="search" type="text" placeholder="What are you looking for?" />
                            </div>
                            <div className="input-field third-wrap">
                                <button className="btn-search" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default XlSearchField

