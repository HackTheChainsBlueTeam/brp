"use client"
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import Button from './Button';
import WalletIcon from '../assets/icons/WalletIcon';
import { useAccount } from "wagmi";

//this is called ConnectWalletButton in the old template
export default function ConnectButton() {
  // 4. Use modal hook
  const modal = useWeb3Modal();
  const {address, chainId, isConnected} = useAccount();
  var text = "Connect Wallet";
  //what an ugly conditional but oh well I don't want to deal with
  //weird custom string types.
  if(isConnected){
    return (
      <>
        <Button text={address} onButtonClick={() => { modal.open() }}
          className="connect-wallet-button nowrap" iconStart={<WalletIcon className="svg-icon margin-right fill-svg-primary" />}></Button>
      </>
    );
  }
  return (
    <>
      <Button text="Connect Wallet" onButtonClick={() => { modal.open() }}
        className="connect-wallet-button nowrap" iconStart={<WalletIcon className="svg-icon margin-right fill-svg-primary" />}></Button>
    </>
  )
}