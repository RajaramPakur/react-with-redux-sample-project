import React, { Component } from 'react';
import navigation from '../../../_nav';
import NavList from '../Navs/NavList/NavList';

export class SideNav extends Component {


    render() {
        return (
            <div>
                <nav className="site-navigation flex flex-column justify-content-between">
                    <div className="site-branding d-none d-lg-block ">
                        <h1 className="site-title"><img src={require("../../../assets/images/logo2.png")} alt="Logo" /></h1>
                    </div>
                    <ul className="main-menu flex flex-column justify-content-center">
                        <NavList navLinks={navigation.items} />
                    </ul>
                    <p>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                    </p>
                    <div className="social-profiles">
                        <ul className="flex justify-content-start justify-content-lg-center align-items-center">
                            <li><a href="https://fb.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default SideNav
