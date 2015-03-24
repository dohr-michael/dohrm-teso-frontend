'use strict';
var React = require('react/addons');


module.exports = React.createClass({
    propTypes: {
        src: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.instanceOf(Promise)
        ]).isRequired
    },
    getInitialState() {
        return {
            src: null
        }
    },
    componentWillMount() {
        this.updateSrc();
    },
    componentWillReceiveProps() {
        this.updateSrc();
    },
    updateSrc() {
        if (this.props.src instanceof String) {
            this.setState({src: this.props.src});
        } else if (this.props.src instanceof Promise) {
            this.props.src.then((src)=> {
                this.setState({src: src});
            });
        }
    },
    render() {
        if (this.state.src) {
            return (
                <img src={this.state.src}/>
            );
        } else {
            return (
                <span></span>
            );
        }

    }
});
