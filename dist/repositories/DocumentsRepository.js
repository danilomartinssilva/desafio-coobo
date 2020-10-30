"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Document_1 = __importDefault(require("../models/Document"));
var DocumentsRepository = /** @class */ (function () {
    function DocumentsRepository() {
        this.documents = [];
    }
    DocumentsRepository.prototype.all = function () {
        return this.documents;
    };
    DocumentsRepository.prototype.find = function (status) {
        console.log('Status recibido', status);
        return this.documents.filter(function (item) { return item.status == status; });
    };
    DocumentsRepository.prototype.create = function (_a) {
        var type = _a.type, name = _a.name, value = _a.value, status = _a.status;
        var document = new Document_1.default({ type: type, name: name, value: value, status: status });
        this.documents.push(document);
        return document;
    };
    return DocumentsRepository;
}());
exports.default = DocumentsRepository;
