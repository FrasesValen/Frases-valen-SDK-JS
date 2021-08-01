"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Phrase = exports.FrasesValenApi = void 0;
var axios_1 = __importDefault(require("axios"));
var phrase_1 = __importDefault(require("./types/phrase"));
exports.Phrase = phrase_1.default;
var user_1 = __importDefault(require("./types/user"));
exports.User = user_1.default;
var FrasesValenApi = /** @class */ (function () {
    function FrasesValenApi(token, opts) {
        this.token = token;
        this.baseURL = (opts === null || opts === void 0 ? void 0 : opts.baseURL) ? opts === null || opts === void 0 ? void 0 : opts.baseURL : 'https://frasesvalen.antonioma.com/api';
        this.axios = axios_1.default.create({
            baseURL: this.baseURL,
            headers: token ? { Authorization: "Bearer " + this.token } : {}
        });
    }
    FrasesValenApi.prototype.getPhrase = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = phrase_1.default.bind;
                        return [4 /*yield*/, this.axios.get("phrase/" + (id ? id : 'random')).then(function (r) { return r.data; })];
                    case 1: return [2 /*return*/, new (_a.apply(phrase_1.default, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    FrasesValenApi.prototype.createPhrase = function (phrase) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.token)
                            throw ('You need to provide a token in order to use the /phrases/create endpoint.');
                        return [4 /*yield*/, this.axios.post('phrases/create', phrase).then(function (r) { return r.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FrasesValenApi.prototype.getMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.token)
                            throw ('You need to provide a token in order to use the /user endpoint.');
                        return [4 /*yield*/, this.axios.get('user').then(function (r) { return r.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FrasesValenApi;
}());
exports.FrasesValenApi = FrasesValenApi;
