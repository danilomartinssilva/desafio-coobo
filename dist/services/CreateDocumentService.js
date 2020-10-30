"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateDocumentService = /** @class */ (function () {
    function CreateDocumentService(documentRepository) {
        this.documentRepository = documentRepository;
    }
    CreateDocumentService.prototype.execute = function (_a) {
        var type = _a.type, name = _a.name, status = _a.status, value = _a.value;
        var document = this.documentRepository.create({
            name: name, value: value, type: type, status: status
        });
        return document;
        // TODO
    };
    return CreateDocumentService;
}());
exports.default = CreateDocumentService;
