"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractContracts = exports.extractImports = void 0;
const IMPORTS_TYPE_KEY = 'ImportDirective';
const CONTRACTS_TYPE_KEY = 'ContractDefinition';
function extractImports(parsedSolidity) {
    let imports = [];
    if (parsedSolidity && parsedSolidity.children) {
        parsedSolidity.children.forEach(element => {
            if (element.type === IMPORTS_TYPE_KEY) {
                imports.push(element.path);
            }
        });
    }
    return imports;
}
exports.extractImports = extractImports;
function extractContracts(parsedSolidity) {
    let contracts = [];
    if (parsedSolidity && parsedSolidity.children) {
        parsedSolidity.children.forEach(element => {
            if (element.type === CONTRACTS_TYPE_KEY) {
                contracts.push(element.name);
            }
        });
    }
    return contracts;
}
exports.extractContracts = extractContracts;
//# sourceMappingURL=solidityPraserExtractor.js.map