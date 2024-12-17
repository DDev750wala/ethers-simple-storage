# STEPS

## Step-1:
 - compile the contract using solc-js
    ```
    yarn add solc
    ```

## Step-2:
 - compile the contract.
  
    ```solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol ```

## Step-3:
 - Install ``` Ethers.js ``` package by ``` yarn add ethers ```
 - 


### default formatter
```
"[solidity]": {
    "editor.defaultFormatter": "NomicFoundation.hardhat-solidity"
},
"[javascript]":{
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

**RPC URl** - Remote Procedure Call URL (used to interact with the blockchain network)