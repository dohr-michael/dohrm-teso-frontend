'use strict';

var React = require('react/addons'),
    Rooter = require('react-router'),
    Link = Rooter.Link,
    NavbarItemDropdown = require('./navbar-item-dropdown');

var Navbar = React.createClass({

    renderHeader() {
        var brandLink = this.props.name ? (<Link to="home" className="navbar-brand">{this.props.name}</Link>) : null;
        return (
            <div className="navbar-header">
                {brandLink}
                <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#menu-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        );
    },

    renderItem(item) {
        // TODO Check the item type to returns different kind of result.
        return (<NavbarItemDropdown key={item.target} name={item.name} items={item.items}/>);
    },

    renderItems() {
        if (this.props.items && this.props.items.length > 0) {
            return (
                <ul className="nav navbar-nav">
                    {this.props.items.map((item)=>(this.renderItem(item)))}
                </ul>
            );
        } else {
            return null;
        }
    },

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                {this.renderHeader()}
                <div id="menu-collapse" className="navbar-collapse collapse">
                    {this.renderItems()}
                </div>
            </nav>
        );
    }
});


module.exports = Navbar;
