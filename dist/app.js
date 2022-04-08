"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parser = __importStar(require("@solidity-parser/parser"));
const solidityParserExtractor = __importStar(require("./helpers/solidityPraserExtractor"));
const bodyParser = __importStar(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
const input = `
    import "solidity-linked-list/contracts/StructuredLinkedList.sol";
    import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/math/SafeMath.sol";

    contract VarysContract {
        mapping (uint => address) public addresses;
    }
    `;
app.post('/analyze', (req, res) => {
    let code = req.body.code;
    if (code) {
        try {
            const ast = parser.parse(code);
            res.send({
                imports: solidityParserExtractor.extractImports(ast),
                contracts: solidityParserExtractor.extractContracts(ast)
            });
        }
        catch (e) {
            res.status(500).send('Invalid Solidity code');
        }
    }
    else {
        res.status(400).send('Invalid Request');
    }
});
app.listen(port, () => {
    return console.log(`express listening port 3000`);
});
//# sourceMappingURL=app.js.map