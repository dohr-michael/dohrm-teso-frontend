'use strict';

var React = require('react/addons');

var SocialLinks = React.createClass({
    propTypes: {
        linkedin: React.PropTypes.string,
        github: React.PropTypes.string,
        facebook: React.PropTypes.string,
        google: React.PropTypes.string
    },
    render() {
        var links = [];
        var pushToLink = (link, style)=> {
            if (link) {
                links.push({'style': style, 'link': link})
            }
        };
        pushToLink(this.props.linkedin, 'fa fa-linkedin-square');
        pushToLink(this.props.github, 'fa fa-github');
        pushToLink(this.props.facebook, 'fa fa-facebook-official');
        pushToLink(this.props.google, 'fa fa-google-plus-square');
        return (
            <ul className="list-inline">
                {links.map((item, idx)=>(
                    <li key={'link-' + idx}>
                        <a href={item.link} target="_blank"><i className={item.style}></i></a>
                    </li>
                ))}
            </ul>
        );
    }
});

module.exports = SocialLinks;
