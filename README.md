# dApp starter template

----
## Live website: 

[eth-dapp-starter.vercel.app/](https://eth-dapp-starter.vercel.app/) (must have MetaMask installed and be connected to Goerli Testnet!)

---


## Premise: 

The dApp is a simple implementation for the scenario that a charity decides to do a web3 token fundraising event. The smart contract connected with this dApp is a simple donate and withdraw contract which collects donations from any wallet addresses but only allows the owner of the contract to withdraw the funds (the address that deployed the contract) to ensure security of funds. 

This boilerplate template is intended for beginner web3 developers who are learning ethers.js and solidity to easily implement their own ideas with ease. By gaining insight on what the fullstack behind a simple dApp looks like, others can hopefully recreate this with more interesting and complex implementations of their own.

Full documentation and video tutorial TBA, but hopefully the comments in the code provide good context. Email me at zilecao.sas@upenn.edu for any questions!

---


## How to Deploy on your own Machine

1. Open visual studio code and select clone github repo and paste in the link from this repository
2. In a terminal, run 

```
cd eth_dapp_starter
yarn install 
```

3. create a new file in the root directory named ".env" and paste the following: 

``
GOERLI_RPC_URL=
``

``
PRIVATE_KEY=
``

4. And input relevant info next to the equal signs (you can get RPC URL from infura.io and private key from MetaMask)

5. Save everything with ctrl+s and run the following command in your terminal:

```
truffle migrate --network goerli
```

6. If you want to change the network, follow the same template in truffle-config.js and replace the "goerli" in the terminal line above with the other network's name

7. Save everything with ctrl+s 


8. The contract should be deployed soon. To find it, look for "contract address" under the truffle deployment in your terminal - copy the contract address and search for it on the goerli testnet etherscan: https://goerli.etherscan.io/

9. To verify your contract on goerli etherscan, head to the "contract" tab to the right of the "ERC20 token txs" tab. Select verify your contract and choose "multi-file solidity" and compiler 0.8.11. Keep everything else the same and when it prompts you to upload files, upload these two from your project folder: 

```
Migrations.sol
Donate.sol
```

10. After a successful verification, you can now interact with your smart contract on etherscan! However, if you want to be able to connect it with your app, there's just a little more to be done.

11. Scroll down on the "contract" page to "contract abi," go ahead and copy this to your clipboard.

12. Head back to your project files, and go to "components" --> contractABI.js. Proceed to paste and replace everything in the brackets (including the brackets)

13. Then, head over to the "pages" folder --> index.js and replace the hardcoded contract address under "const Donate" with your new deployed contract.

14. Save everything with ctrl+s 

15. You can now start the project in developement mode by running the following in your terminal:

```
yarn dev
```

16: Open http://localhost:3000/ in your browser

17. FINISH! You should now have a replication of the working app running on your local machine. The new smart contract that you deployed will register your account as its owner, so you are free to donate and withdraw any amount from the contract using your dApp. 

Happy building! 

----
