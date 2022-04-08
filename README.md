# solidityParserTest

Running app
<code>node dist/app.js</code>

app available at <code>http://localhost:3000/analyze</code>
Post request with <code>Application/x-www-form-urlencoded</code> content type
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
