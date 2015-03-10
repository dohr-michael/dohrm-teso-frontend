var React = require('react/addons');
// var Reflux = require('reflux');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var Home = React.createClass({
    mixins:[
        Router.Navigation,
        Router.State
    ],

    getInitialState() {
        return {
        };
    },

    render(){
        return (
            <RouteHandler />
        );
    }
});

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
      <p>Hello World!</p>
    )
  }

});

// <Route name="owl" path="/owl" addHandlerKey={true} handler={OwlTestPage}/>
var routes = (
    <Route path="/" handler={Home}>
        <DefaultRoute handler={Todo} />

        <NotFoundRoute handler={Todo}/>
    </Route>
);

module.exports = routes;
