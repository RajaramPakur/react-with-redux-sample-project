import React from 'react';

const SourcesList = (props) => {
    return (

        <div className="col-12 col-md-2 col-lg-2">
            <div className="card border-info mb-3" >
                <div className="card-header"><a href={props.sources.url}>{props.sources.name}</a></div>
                <div className="card-body text-info">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{props.sources.description}</p>
                    <ul className="flex flex-wrap">
                        <li ><a href="#">Category : {props.sources.category}</a></li>
                        <li ><a href="#">Language : {props.sources.language}</a></li>
                        <li ><a href="#">Country : {props.sources.country}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SourcesList
