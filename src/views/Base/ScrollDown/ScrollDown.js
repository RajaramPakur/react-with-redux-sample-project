import React, { Component } from 'react'

export class ScrollDown extends Component {
    render() {
        return (
            <div>
                <div className="scroll-down flex flex-column justify-content-center align-items-center d-none d-lg-block">
                    <span className="arrow-down flex justify-content-center align-items-center"><img src={require("../../../assets/images/arrow-down.png")} alt="arrow" /></span>
                    <span className="scroll-text">Scroll Down</span>
                </div>
            </div>
        )
    }
}

export default ScrollDown
