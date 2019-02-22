import React, { Component } from 'react';
import mainlogo from '../../../assets/images/logo.png';
import jQuery from 'jquery';

class SideHeader extends Component {

    sideBarAction() {
        (function ($) {
            // Main Navigation
            $('.hamburger-menu').on('click', function () {
                $(this).toggleClass('close');
                $('.site-branding').toggleClass('hide');
                $('.site-navigation').toggleClass('show');
                $('.site-header').toggleClass('no-shadow');
            });

            // Scroll to Next Section
            $('.scroll-down').click(function () {
                $('html, body').animate({
                    scrollTop: $('.scroll-down').offset().top + 100
                }, 800);
            });
        })(jQuery);
    }

    componentDidMount = () => {
        this.sideBarAction();
    }

    render() {
        return (
            <div>
                <header className="site-header">
                    <div className="site-branding">
                        <h1 className="site-title"><img src={mainlogo} alt="Logo" /></h1>
                    </div>
                    <div className="hamburger-menu">
                        <div className="menu-icon">
                            <img src={require("../../../assets/images/menu-icon.png")} alt="menu icon" />
                        </div>

                        <div className="menu-close-icon">
                            <img src={require("../../../assets/images/x.png")} alt="menu close icon" />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default SideHeader;
