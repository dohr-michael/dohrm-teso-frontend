'use strict';
var React = require('react/addons'),
    SocialLinks = require('../components/social').SocialLinks;

var Footer = React.createClass({
    render() {
        /*<SocialLinks linkedin="https://www.linkedin.com/pub/micha%C3%ABl-dohr/62/13/27"
         github="https://github.com/dohr-michael"/>*/
        return (
            <footer className="footer">
                powered by MDO
            </footer>
        );
    }
});

module.exports = Footer;
