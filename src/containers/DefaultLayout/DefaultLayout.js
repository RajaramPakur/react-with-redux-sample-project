
import React, { Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideHeader from '../../views/Base/Navbars/SideHeader';
import SideNav from '../../views/Base/Navs/SideNav';
import ScrollDown from '../../views/Base/ScrollDown/ScrollDown';
import routes from '../../route';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

export class DefaultLayout extends Component {

    render() {
        return (
            <div>
                <SideHeader />
                <nav className="site-navigation flex flex-column justify-content-between">
                    <div className="site-branding d-none d-lg-block ">
                        <h1 className="site-title"></h1>
                    </div>
                    <ul className="main-menu flex flex-column justify-content-center">
                        <SideNav />
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
                <div className="nav-bar-sep d-lg-none"></div>
                <Suspense fallback={loading()}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} route={route} />
                                    )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/index" />
                    </Switch>
                </Suspense>
                <ScrollDown />
            </div>
        )
    }
}

export default DefaultLayout;
