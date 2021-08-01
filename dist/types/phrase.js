"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Phrase = /** @class */ (function () {
    function Phrase(data) {
        Object.assign(this, data);
        if (data.created_at)
            this.created_at = new Date(data.created_at.toString());
        if (data.suggested_by && typeof data.suggested_by !== 'string')
            this.suggested_by = new user_1.default(data.suggested_by);
    }
    Object.defineProperty(Phrase.prototype, "text", {
        get: function () {
            return this.phrase;
        },
        enumerable: false,
        configurable: true
    });
    return Phrase;
}());
exports.default = Phrase;
