//should be possible to do SSR for this.
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'

import ChainImage from './ChainImage';
import Button from './Button';

interface ChainSwitcherProps {
  className?: string;
}

function getChainName(chain_id: number =1):string{
  switch (chain_id) {
    case 10:
      return "Optimism"
    case 1:
      return "Ethereum"
    case 31337:
      return "Anvil"
    case 5:
      return "Goerli"
    case 42161:
      return "Arbitrum"
    default:
      // Explicitly assert never to ensure all cases are handled
      throw new Error(`Unhandled chain ID: ${chain_id}`);
  }
}

//were about to get real ugly
const ChainSwitcher = (props: ChainSwitcherProps) => {
  const { className = '' } = props;
  const modal = useWeb3Modal();
  const { open, selectedNetworkId } = useWeb3ModalState();
  //What the fuck kind of type is selectedNetworkId?
  //AAAAAGHHHHHHHHHHHGHGHGHGHGH
  if (open===false){
    //I should put a different type of return statement in here, but for now, we're gonna default to ethereum
    
  }
  // Initialize chainId as null
  let chainId: number | null | undefined = null;

  if (open===false){
    //I should put a different type of return statement in here, but for now, we're gonna default to ethereum
    chainId = 1; 
  }

  // Check if selectedNetworkId is a string and has the expected format "network:chainId"
  if (typeof selectedNetworkId === 'string') {
    console.log("selected NetworkId " + selectedNetworkId);

    const parts = selectedNetworkId.split(':');
    if (parts.length === 2 && !isNaN(Number(parts[1]))) {
      chainId = parseInt(parts[1], 10);
    }
  }
  else if(typeof selectedNetworkId === undefined){
    console.log("undefined, oh this is because im checking the network id without checking if its open");
    chainId = 1;
  }
  else if(typeof selectedNetworkId == undefined){
    console.log("undefined, oh this is because im checking the network id without checking if its open");
    chainId = 1;
  }
  else{
    chainId = selectedNetworkId;
  }
  //this code is so ugly
  //and its all because javascript doesn't have proper numbers
  //I just default to ethereum 

  // Only attempt to get the chain icon if chainId is a number.
  //otherwise default to ethereum
  if (chainId === undefined || chainId === null){
    chainId = 1
  }
  var chainName = getChainName(chainId);
  var chainIcon = ChainImage(chainId);
  //wait we're doing this with var? shouldn't we be using useState? hmm... maybe its fine because we're deriving
  //the value? hmm....
  return (
    <div className={'chain-switcher ' + className}>
      <Button
        onButtonClick={() => { modal.open({view: 'Networks'}) }}
        iconStart={chainIcon} // Render the appropriate chain icon
      >
        {chainName}
      </Button>
    </div>
  );
};

export default ChainSwitcher;
