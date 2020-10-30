"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Document = /** @class */ (function () {
    function Document(_a) {
        var name = _a.name, value = _a.value, type = _a.type, status = _a.status;
        this.id = uuidv4_1.uuid();
        this.name = name;
        this.value = value;
        this.type = type;
        this.status = status;
    }
    return Document;
}());
exports.default = Document;
