var React = require('react/addons'),
    Router = require('react-router'),
    routes = require('./main/routes');

if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
    // MSIE
    React.render(<p> Sorry we do not support Internet explorer.Please use either Chrome or Firefox. </p>, document.getElementById('app-container'));
} else {
    // Start the application.
    Router.run(routes, function (Handler) {
        React.render(<Handler />, document.getElementById('app-container'));
    });
}
