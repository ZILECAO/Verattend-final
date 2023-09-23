import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { Web3Provider } from '@ethersproject/providers';

export function WalletConnect() {

  // getting whether user is authenticated
  const [authenticated, setAuthenticated] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  // getting wallet balance
  const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  };

  // talking with metamask to get the accounts with wallet connection
  async function requestAccount() {
    console.log('Requesting account...');

    // check if MetaMask is installed
    if (window.ethereum) {
      console.log('detected metamask');

      // update wallet address and balance
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);


        setWalletAddress(accounts[0]);
        getBalance();

        if (accounts.length > 0) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }

        console.log('auth detected', authenticated)

      } catch (error) {
        console.error(error);
      }

    } else {
      console.log('no metamask detected');
    }
  }


  // connecting wallet to app after requestAccount() is complete
  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }


  // Top Navigation Bar Element
  return (
    <header className="py-1 backdrop-brightness-100">
      <div className="mx-auto max-w-screen-xl">
        <div className="m-6 flex items-center justify-end">
          <a className="">
            {!authenticated ?
              <button className="px-5 py-2.5 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow" onClick={() => connectWallet()}>Connect Wallet</button>
              : <button className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-md shadow" onClick={() => connectWallet()}>Connect Wallet</button>
            }
          </a>
        </div>
        <div className="m-6">
          <p>
            Wallet Address: <a className="text-green-500"> {walletAddress} </a>
          </p>
          <p>
            Balance: <a className="text-green-500"> {balance} </a>
          </p>


        </div>


      </div>
    </header>
  )
}