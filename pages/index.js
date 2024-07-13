import { chain,stakingContract,client,NMC,stakingContractAddress} from "../const/exports"

import styles from '../styles/Home.module.css';
import { useState,useEffect } from "react";
import { useActiveAccount } from "thirdweb/react";
import { sendAndConfirmTransaction,getContract,prepareContractCall,readContract } from "thirdweb";

import { approve } from "thirdweb/extensions/erc20";
import { ethers } from "ethers";
import { toEther } from "thirdweb/utils"


export default function StakePage() {
 const [amountToStake, setAmountToStake] = useState("1")
 const [stakedTokenAmount,setStakedTokenAmount] = useState("loading..")
 const [rewardTokenAmount, setRewardTokenAmount] = useState("loading..")
 const [withdrawTokens,setWithdrawTokens] = useState("1")
 const [lockupPeriodEndTime, setLockupPeriodEndTime] = useState("")
  const account = useActiveAccount()

  async function stakeNMC(){

    const amountInEth = ethers.utils.parseUnits(amountToStake, 'ether').toString()
try{
    const contract = getContract({ 
      client:client, 
      chain: chain,
      address: NMC
    });

    const transaction = prepareContractCall({ 
      contract:contract, 
      method: "function approve(address spender, uint256 value) returns (bool)", 
      params: [stakingContractAddress,amountInEth]
    });
    const { transactionHash } = await sendAndConfirmTransaction({ 
      transaction, 
      account 
    })
  }
  catch(err){
    console.log("failed to approve",err)
    return
  }
try{
  const transaction = prepareContractCall({ 
    contract:stakingContract, 
    method:"function stake(uint256 _amount) payable",
    params: [amountInEth]

  });
  const { transactionHash } = await sendAndConfirmTransaction({ 
    transaction, 
    account 
  })
}
catch(err){

  console.log("failed to stake",err)
}

  }



  async function getRewardBalance(){
try{
    const call = await readContract({ 
      contract:stakingContract, 
      method: "function getStakeInfo(address _staker) view returns (uint256 _tokensStaked, uint256 _rewards)", 
      params: [account.address] 
    });

    
    // console.log(call)
    const stakingBalance = toEther(BigInt(call[0]).toString())

    const rewardBalance = toEther(BigInt(call[1]).toString())

    console.log(stakingBalance,"balance")
    setStakedTokenAmount(stakingBalance)

    setRewardTokenAmount(rewardBalance)
  }

  catch(err){

    // console.log("error getting staking info for the address",err)
    // setStakedTokenAmount("error")
    // setRewardTokenAmount("error")
  }
  }
  useEffect(() => {
    setInterval(() => {
      getRewardBalance();
    }, 5000);
  }, [account]);


  async function claimRewards(){

    try{
      const transaction = prepareContractCall({ 
        contract:stakingContract, 
        method:"function claimRewards()",
        params: []
    
      });
      const { transactionHash } = await sendAndConfirmTransaction({ 
        transaction, 
        account 
      })
    }
    catch(err){
    
      console.log("failed to claimRewards",err)
    }



  }
  async function withdrawStakedTokens(){
    const amountInEth = ethers.utils.parseUnits(withdrawTokens, 'ether').toString()


    try{
      const transaction = prepareContractCall({ 
        contract:stakingContract, 
        method:"function withdraw(uint256 _amount)",
        params: [amountInEth]
    
      });
      const { transactionHash } = await sendAndConfirmTransaction({ 
        transaction, 
        account 
      })



    }
    catch(err){
    
      console.log("failed to claimRewards",err)
      const call = await readContract({ 
        contract:stakingContract, 
        method: "function userLockupEndTime(address) view returns (uint256)", 
        params: [account.address] 
      });
     setLockupPeriodEndTime(call)
      
    }






  }
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}



  return (
    <div className={styles.container} style={{ marginTop: "200px" }}>
      <input
      value={amountToStake}
      onChange={(e)=>setAmountToStake(e.target.value)}
      type="string"
      required
      placeholder="Enter NMC amount you want to stake"
      
      />
    <br/>
      <button onClick={stakeNMC}
      className={styles.button}
      
      >Stake NMC
      </button>
     
      <br/>
      <br/>
      <br/>
      <div className={styles.grid}>

      <a className={styles.card}>
      <h3>Staked Token: </h3>
      <p>{stakedTokenAmount}</p>
      </a>

      <a className={styles.card}>
      <h3>Rewards Token(TCM) : </h3>
      <p>{rewardTokenAmount}</p>
      </a>

      </div>
      <button onClick={claimRewards}
      className={styles.button}
      
      >Claim Rewards
      </button>
      <br/>
      <br/>
      <br/>
      <input
      value={withdrawTokens}
      onChange={(e)=>setWithdrawTokens(e.target.value)}
      type="string"
      required
      placeholder="Enter NMC amount you want to withdraw"
      
      />
    
      <br/>
      <button onClick={withdrawStakedTokens}
      className={styles.button}
      
      >Withdraw Staked Tokens
      </button>
      {lockupPeriodEndTime !== "" && (
  <p>Withdraw Time: {formatTimestamp(BigInt(lockupPeriodEndTime).toString())}</p>
)}
      
    </div>
  );
}