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
        <Route name="alchemy" path="/alchemy" addHandlerKey={true} handler={Todo}/>
        <Route name="alchemy_ingredients" path="/alchemy/ingredients" addHandlerKey={true} handler={Todo}/>
        <Route name="alchemy_effects" path="/alchemy/effects" addHandlerKey={true} handler={Todo}/>
        <Route name="alchemy_ingredients_recipes" path="/alchemy/ingredients/recipes" addHandlerKey={true} handler={Todo}/>
        <NotFoundRoute handler={Todo}/>
    </Route>
);

module.exports = routes;
