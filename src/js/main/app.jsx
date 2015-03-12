var React = require('react/addons'),
    RouteHandler = require('react-router').RouteHandler,
    Menu = require('./menu');


var App = React.createClass({
    render() {
        return (
            <div>
                <Menu />
                <RouteHandler />
                <div>Footer</div>
            </div>
        );
    }
});

module.exports = App;
