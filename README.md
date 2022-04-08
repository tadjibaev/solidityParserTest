# solidityParserTest

Running app
node dist/app.js

app available at localhost:3000/analyze
Post request with Application/x-www-form-urlencoded content type
with parameter code that contains Solidity code

as return we receive
<pre>
<code>
  {
    "imports": [
        "VarysContractBase.sol",
        "VarysContractExtras.sol",
    ],
    "contracts": [
        "VarysContract",
    ],
}</code>
</pre>
