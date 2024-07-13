
import { polygon,polygonAmoy } from "thirdweb/chains";
import {createThirdwebClient} from "thirdweb";
import { getContract } from "thirdweb";

export const env = process.env.NEXT_PUBLIC_ENV;

export const stakingContractAddress = env === 'dev' 
    ? process.env.NEXT_PUBLIC_AMOY_STAKING_CONTRACT 
    : process.env.NEXT_PUBLIC_POLYGON_STAKING_CONTRACT;

export const chain = env === 'dev' ? polygonAmoy : polygon;
export const client = createThirdwebClient({ 
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID
  })
export const stakingContract = getContract({
    client:client, 
    chain: chain,
    address: stakingContractAddress
  });

export const NMC = env ==='dev'? process.env.NEXT_PUBLIC_AMOY_NMC: process.env.NEXT_PUBLIC_POLYGON_NMC