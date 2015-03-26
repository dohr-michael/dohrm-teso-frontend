'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    Reflux = require('reflux'),
    actions = require('../actions'),
    Store = require('../store'),
    RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    displayName: "Ingredients",
    mixins: [
        Router.Navigation,
        Router.State,
        React.addons.LinkedStateMixin
    ],
    render() {
        return (
            <RouteHandler />
        );
    }
});
