import { Chain } from 'wagmi'
//this might be moved elsewhere
export const Anvil = {
  id: 31337,
  name: 'Localhost',
  network: 'Localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://0.0.0.0:8545'] },
    default: { http: ['http://0.0.0.0:8545'] },
  },
} as const satisfies Chain
