import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Filter = React.lazy(() => import('./views/Base/Filter/Filter'));
const MainDash = React.lazy(() => import('./views/Base/Dashboard/MainDash'));
const ViewCard = React.lazy(() => import('./views/Base/ViewCard/ViewCard'));
const Sources = React.lazy(() => import('./views/Base/Sources/Sources'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/index', exact: true, name: 'Recent Posts', component: MainDash },
    { path: '/base/filter', exact: true, name: 'Filter', component: Filter },
    { path: '/base/sources', exact: true, name: 'Sources', component: Sources },
    { path: '/base/topnews', exact: true, name: 'Popular News', component: MainDash },
    { path: '/card', exact: true, name: 'Card', component: ViewCard },
];

export default routes;

