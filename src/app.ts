import express from 'express';
import * as parser from '@solidity-parser/parser';
import * as solidityParserExtractor from "./helpers/solidityPraserExtractor"
import * as bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: false}))


const input = `
    import "solidity-linked-list/contracts/StructuredLinkedList.sol";
    import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/math/SafeMath.sol";

    contract VarysContract {
        mapping (uint => address) public addresses;
    }
    `

app.post('/analyze', (req, res) => {
    let code = req.body.code;

    if (code) {
        try {
            const ast = parser.parse(code)

            res.send({
                imports: solidityParserExtractor.extractImports(ast),
                contracts: solidityParserExtractor.extractContracts(ast)
            })
        } catch (e) {
            res.status(500).send('Invalid Solidity code');
        }
    } else {
        res.status(400).send('Invalid Request');
    }
});

app.listen(port, () => {
  return console.log(`express listening port 3000`);
});