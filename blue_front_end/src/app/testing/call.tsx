import { useReadContract } from 'wagmi'
import { FactoryABI } from './factoryABI'

//CHANGE THIS DURING DEMO
//CHANGE THIS TO ENVIRONMENT VARIABLE
const USDTAddress = '0x0DA580405B03764EB10435E10E506574ffDC6eCb'

export function readBlockData() {
  const result = useReadContract({
    abi: FactoryABI,
    address: USDTAddress,
    functionName: 'getListOfCompanyData'
  })
  console.log(result) 
  //hardcoded results haha
  return "hi";
}