'use strict';
var React = require('react/addons'),
    SocialLinks = require('../components/social').SocialLinks;

var Footer = React.createClass({
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    powered by MDO
                    <SocialLinks linkedin="https://www.linkedin.com/pub/micha%C3%ABl-dohr/62/13/27"
                        github="https://github.com/dohr-michael"/>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
