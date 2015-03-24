'use strict';

var React = require('react/addons'),
    RouteHandler = require('react-router').RouteHandler,
    MenuStore = require('../store/MenuStore'),
    Navbar = require('../components/navbar').Navbar,
    Footer = require('./footer');

var App = React.createClass({
    displayName: "TESO Tools",
    render() {
        return (
            <div>
                <Navbar name="The Elder Scroll Online Tools" items={MenuStore.menuItems} />
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <RouteHandler />
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
