NFT Marketplace with Chainlink Oracle

This project implements a simple NFT marketplace smart contract on the Ethereum blockchain.

Key Features

  Users can list NFTs for sale in USD.
  A Chainlink oracle is used to convert the USD price to ETH.
  The contract acts as an escrow during transactions.
  Admin receives a 10% commission on sales.


Smart Contract (Solidity):

  NFTMarketplace.sol contains the smart contract code.
  Uses OpenZeppelin and Chainlink libraries.


DApp (React):

 A basic DApp allows users to:
  List NFTs
  Buy NFTs
  View listings

To run:
  Open VS Code terminal.
  1) git clone https://github.com/AashrayGithub/LYNC-Solidity-Intern-Blockchain-Developer-Task.git
  2) npm i
  3) npm run


NOTE: Due to high gas costs in the Hardhat development environment and limited testnet funds, this project was deployed using Remix with a connected MetaMask wallet utilizing the Sepolia testnet. The deployed contract address is 0x68cf0f8c47c46bbda4f086a38d3afe617cad5f17. 
