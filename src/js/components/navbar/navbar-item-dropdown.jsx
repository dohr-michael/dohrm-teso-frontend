'use strict';

var React = require('react/addons'),
    Rooter = require('react-router'),
    Link = Rooter.Link;

var NavbarItemDropdown = React.createClass({
    generateRow(item) {
        if (item.type === 'separator') {
            return (<li key={item.target} className="divider"></li>);
        } else {
            return (
                <li key={item.target}>
                    <Link to={item.target}>{item.name}</Link>
                </li>
            );
        }
    },
    render() {
        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">{this.props.name}
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                    {this.props.items.map((item)=>this.generateRow(item))}
                </ul>
            </li>
        );
    }
});

module.exports = NavbarItemDropdown;
