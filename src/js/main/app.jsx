var React = require('react/addons'),
    RouteHandler = require('react-router').RouteHandler,
    MenuStore = require('../store/MenuStore'),
    Navbar = require('../components/navbar').Navbar;

var App = React.createClass({
    render() {
        return (
            <div>
                <Navbar name="The Elder Scroll Online Tools" items={MenuStore.menuItems} />
                <div className="container">
                    <RouteHandler />
                </div>
                <div>Footer</div>
            </div>
        );
    }
});

module.exports = App;
