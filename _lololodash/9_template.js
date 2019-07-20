var _ = require("lodash");

var worker = function (loginData) {
    return _.template(
        'Hello <%= username %> (logins: <%= loginCount %>)')
        ({
            username: loginData.name,
            loginCount: loginData.login.length
        });
};

module.exports = worker;
