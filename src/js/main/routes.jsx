var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    App = require('./app'),
    Todo = require('./todo');


// Defined routes.
var routes = (
    <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={Todo} />

        <NotFoundRoute handler={Todo}/>
    </Route>
);

module.exports = routes;
