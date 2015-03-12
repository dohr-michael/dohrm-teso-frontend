var React = require('react/addons'),
    Router = require('react-router');

var Todo = React.createClass({
    mixins:[
        Router.Navigation,
        Router.State
    ],

    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <p>Not yet implemented.</p>
        );
    }

});

module.exports = Todo;
