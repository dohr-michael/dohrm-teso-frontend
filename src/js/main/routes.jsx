var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect,
    App = require('./app'),
    Todo = require('./todo'),
    Alchemy = require('../alchemy');


// Defined routes.
var routes = (
    <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={Todo} />
        <Route name="alchemy" handler={Alchemy.Alchemy}>
            <Route name="alchemy_ingredients" path="/alchemy/ingredients" handler={Alchemy.Ingredients}/>
            <Route name="alchemy_effects" path="/alchemy/effects" handler={Todo}/>
            <Route name="alchemy_ingredients_recipes" path="/alchemy/ingredients/recipes" handler={Todo}/>
            <NotFoundRoute handler={Todo}/>
        </Route>
        <NotFoundRoute handler={Todo}/>
    </Route>
);

module.exports = routes;
