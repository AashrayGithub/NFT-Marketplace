LYNC - NFT Marketplace with Chainlink Oracle
This project implements a user-friendly NFT marketplace on the Ethereum blockchain, leveraging Chainlink oracles for secure price conversions.

Key Features:

-USD Listing: Users can list their NFTs for sale in USD, simplifying pricing for a broader audience.
-Chainlink Integration: A Chainlink oracle ensures accurate and reliable exchange rates, converting USD prices to ETH at the time of purchase.
-Escrow Security: The smart contract acts as a secure escrow during transactions, holding funds until the NFT is successfully transferred.
-Admin Commission: A 10% commission is automatically deducted from each sale and sent to the admin wallet, facilitating project maintenance.


Technologies:

Smart Contract: Solidity
Libraries: OpenZeppelin, Chainlink
Front-end: React
Development Tools: VS Code, npm


Getting Started:

Prerequisites:

MetaMask wallet configured with SEPOLIA testnet. Instructions for installing MetaMask - (https://metamask.io/).
All transactions will be using sepolia faucet. For extra faucet, visit https://faucets.chain.link/sepolia
Node.js and npm installed (https://nodejs.org/)

Option 1: Using VS Code

  Open VS Code terminal. And open empty folder in vs code. Now, in the terminal-
  1) git init
  2) git clone https://github.com/AashrayGithub/LYNC-Solidity-Intern-Blockchain-Developer-Task.git
  3) npm i
  4) npm run

Option 2: Using Downloaded Code

  1) Click on <>Code dropdown and then click on Download ZIP.
  2) Extract the zip file
  3) Open the extracted file
  4) npm install
  5) npm start

Deployment:

Note: Due to high gas costs on the Ethereum mainnet, this project was deployed using Remix on the Sepolia testnet. Real Ether (ETH) should not be used for transactions on the testnet.

Deployed Contract Address: 0x68cf0f8c47c46bbda4f086a38d3afe617cad5f17 (Sepolia Testnet)

Using the DApp:

Open http://localhost:3000 in your browser.
Connect your MetaMask wallet to the DApp using the Sepolia testnet.
Interact with the DApp to list, buy, and view NFT listings (functionality under development).

To run:
  Open VS Code terminal. And open empty folder in vs code. Now, in the terminal-
  1) git init
  2) git clone https://github.com/AashrayGithub/LYNC-Solidity-Intern-Blockchain-Developer-Task.git
  3) npm i
  4) npm run

OR
  1) Click on <>Code dropdown and then click on Download ZIP.
  2) Extract the zip file
  3) Open the extracted file
  4) npm install
  5) npm start

-

NOTE: Due to high gas costs in the Hardhat development environment and limited testnet funds, this project was deployed using Remix with a connected MetaMask wallet utilizing the Sepolia testnet. The deployed contract address is 0x68cf0f8c47c46bbda4f086a38d3afe617cad5f17. 
