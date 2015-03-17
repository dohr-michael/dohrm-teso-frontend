var React = require('react/addons'),
    RouteHandler = require('react-router').RouteHandler,
    Menu = require('./menu');
require('bootstrap');
var App = React.createClass({
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    <RouteHandler />
                </div>
                <div>Footer</div>
            </div>
        );
    }
});

module.exports = App;
