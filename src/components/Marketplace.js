import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { GetIpfsUrlFromPinata } from "../utils";
import { use } from "chai";

export default function Marketplace() {
const sampleData = [
    // {
    //     "name": "NFT#1",
    //     "description": "Alchemy's First NFT",
    //     "website":"http://axieinfinity.io",
    //     "image":"https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
    //     "price":"0.03ETH",
    //     "currentlySelling":"True",
    //     "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    // },
    // {
    //     "name": "NFT#2",
    //     "description": "Alchemy's Second NFT",
    //     "website":"http://axieinfinity.io",
    //     "image":"https://gateway.pinata.cloud/ipfs/QmdhoL9K8my2vi3fej97foiqGmJ389SMs55oC5EdkrxF2M",
    //     "price":"0.03ETH",
    //     "currentlySelling":"True",
    //     "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    // },
    // {
    //     "name": "NFT#3",
    //     "description": "Alchemy's Third NFT",
    //     "website":"http://axieinfinity.io",
    //     "image":"https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
    //     "price":"0.03ETH",
    //     "currentlySelling":"True",
    //     "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    // },


];
const [data, updateData] = useState(sampleData);
const [dataFetched, updateFetched] = useState(false);

async function getAllNFTs() {
  try { const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    const signer =  provider.getSigner();
    //Pull the deployed contract instance
    let contract =  new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    console.log(contract);
    let transaction =  await contract.getAllNFTs()

    console.log(transaction);
    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(transaction.map(async (i )=> {
        console.log(i);
        var tokenURI = await contract.tokenURI(i.tokenId);
        console.log("getting this tokenUri", tokenURI);
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;
        console.log(i.priceInWei);
        let price =  i &&  ethers.utils.formatUnits( i.priceInWei.toString(), 'ether');
        console.log(price);
        let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.image,
            name: meta.name,
            description: meta.description,
        }
        return item;
    }))

    updateFetched(true);
    updateData(items);} catch(e){
        console.log("error in gatallnft")
    }
}

useEffect(()=>{
     if(!dataFetched)
        getAllNFTs();

},[])

return (
    <div>
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-20">
            <div className="md:text-xl font-bold text-white">
                Top NFTs
                {/* <button onClick={()=>{!dataFetched && getAllNFTs()}}>press</button>  */}
            </div>
            <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
                {data.length != 0 ?  data.map((value, index) => {
                    return <NFTTile data={value} key={index}></NFTTile>;
                }) : <h1 className=" text-white text-2xl">Please Connect to Metamask to view listed NFTs

                
                </h1>}
            </div>
        </div>            
    </div>
);

}
