"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allBadges = ['broadcaster', 'mod', 'vip', 'verified', 'sub'];
var User = /** @class */ (function () {
    function User(data) {
        var _this = this;
        Object.assign(this, data);
        if (!data.badges)
            this.badges = [];
        allBadges.forEach(function (badge) {
            if (data[badge]) {
                _this.badges.push(badge);
            }
            delete _this[badge];
        });
    }
    return User;
}());
exports.default = User;
