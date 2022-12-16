import React from 'react';
import logo from '../../logo.svg';
import Chat from '../Chat/Chat';
import Web3 from '../Web3/Web3';
import './App.css';
import { ethers } from "ethers"


function Home() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Exchange App Ethereum 10.0
        </p>
        <button className='web3Auth' onClick={createWallet}>Connect to Web3</button>

      </header>
    </div><div className='Content'> <Chat />   <Web3 /> </div></>
       
  );
}



function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log(wallet);
}


export default Home;
