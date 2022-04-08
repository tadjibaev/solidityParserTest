function extractImports(parsedSolidity) {
    let imports = [];
    if (parsedSolidity && parsedSolidity.children) {
        parsedSolidity.children.forEach(element => {
            if (element.type === 'ImportDirective') {
            }
        });
    }
    return imports;
}
function extractContracts(parsedSolidity) {
}
//# sourceMappingURL=solidityExtractor.js.map