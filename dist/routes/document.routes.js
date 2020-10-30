"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DocumentsRepository_1 = __importDefault(require("../repositories/DocumentsRepository"));
var CreateDocumentService_1 = __importDefault(require("../services/CreateDocumentService"));
var documentRouter = express_1.Router();
var documentRepository = new DocumentsRepository_1.default();
documentRouter.get('/', function (request, response) {
    try {
        var _a = request.query.status, status_1 = _a === void 0 ? null : _a;
        var documents = status_1 ? documentRepository.find(status_1) : documentRepository.all();
        return response.json({ documents: documents });
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
documentRouter.post('/', function (request, response) {
    try {
        var _a = request.body, value = _a.value, type = _a.type, name_1 = _a.name, status_2 = _a.status;
        var createDocument = new CreateDocumentService_1.default(documentRepository);
        var document_1 = createDocument.execute({ value: value, status: status_2, type: type, name: name_1 });
        return response.json(document_1);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = documentRouter;
