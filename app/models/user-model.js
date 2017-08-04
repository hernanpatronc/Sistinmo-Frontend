"use strict";
(function (PRIVILEGES) {
    PRIVILEGES[PRIVILEGES["PRIV_ALL"] = -1] = "PRIV_ALL";
    PRIVILEGES[PRIVILEGES["PRIV_READ"] = 0] = "PRIV_READ";
    PRIVILEGES[PRIVILEGES["PRIV_RW"] = 1] = "PRIV_RW";
})(exports.PRIVILEGES || (exports.PRIVILEGES = {}));
var PRIVILEGES = exports.PRIVILEGES;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user-model.js.map