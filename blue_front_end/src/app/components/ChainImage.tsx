// Import your chain icon components
import OptimismIcon from '../assets/icons/coins/OptimismIcon';
import EthereumIcon from '../assets/icons/coins/EthereumIcon';
import ArbitrumIcon from '../assets/icons/coins/ArbitrumIcon';

interface ChainImageProps{
  chain_id?: number;
};
// ChainImage function component
// Default export of the function
//JSX element is equivalent to React Node... at least it should be...
export default function ChainImage(chain_id: number = 1): JSX.Element {
    switch (chain_id) {
      case 10:
        return <OptimismIcon className="svg-icon padding-right-half"/>;
      case 1:
        return <EthereumIcon className="svg-icon padding-right-half"/>;
      case 31337:
        return <EthereumIcon className="svg-icon padding-right-half"/>;
      case 5:
        return <EthereumIcon className="svg-icon padding-right-half"/>;
      case 42161:
        return <ArbitrumIcon className="svg-icon padding-right-half"/>
      default:
        // Explicitly assert never to ensure all cases are handled
        throw new Error(`Unhandled chain ID: ${chain_id}`);
    }
}