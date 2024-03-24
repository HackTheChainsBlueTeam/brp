"use client"

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'

import { arbitrum, mainnet, goerli, optimism } from 'wagmi/chains'
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'
import { Anvil } from './functions/Anvil'
import ThemeProvider from './theme-provider'
import { Arbitrum_Anvil } from './functions/Arbitrum_Anvil'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { State, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//setup query client
const queryClient = new QueryClient()

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
//temporarily riding of mainnet arbitrum
export const chains = [mainnet, arbitrum, goerli, optimism] as const
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
  })
// Create modal
createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
  })
  
//I should look up the theme variables, also maybe properly type the children?
//it would be a react node aka jsx element
export default function WagmiWallet({ children }: any) {
    return (
        <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
        <ThemeProvider>
                {children}
        </ThemeProvider>
        </QueryClientProvider>
        </WagmiProvider>
    )
}
