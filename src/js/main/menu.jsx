var React = require('react/addons'),
    Rooter = require('react-router');
var Link = Rooter.Link;

//activeClassName="navbar-brand"
var Menu = React.createClass({
    /*<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
     <span class="sr-only">Toggle navigation</span>
     <span class="icon-bar"></span>
     <span class="icon-bar"></span>
     <span class="icon-bar"></span>
     </button>*/
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="home" className="navbar-brand">The Elder Scroll Online Tools</Link>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Menu;
