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
                <!--<div className="container">-->
                <div className="navbar-header">
                    <Link to="home" className="navbar-brand">The Elder Scroll Online Tools</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Alchimie
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">Action</a>
                                </li>
                                <li>
                                    <a href="#">Another action</a>
                                </li>
                                <li>
                                    <a href="#">Something else here</a>
                                </li>
                                <li className="divider"></li>
                                <li className="dropdown-header">Nav header</li>
                                <li>
                                    <a href="#">Separated link</a>
                                </li>
                                <li>
                                    <a href="#">One more separated link</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!--</div>-->
            </nav>
        );
    }
});

module.exports = Menu;
