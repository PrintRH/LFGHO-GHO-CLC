const { ethers, getNamedAccounts} = require("hardhat")
const { getUsdc, AMOUNT } = require("./getUsdc")

const BORROW_MODE = 2 // Variable borrow mode. Stable was disabled. 

async function main() {
    await getUsdc()
    const { deployer } = await getNamedAccounts()
    const lendingPool = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951"
    const usdcTokenAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"
    const ghoTokenAddress = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60"
    await approveErc20(usdcTokenAddress, lendingPool, AMOUNT, deployer)
    console.log("Supplying USDC...")
    await lendingPool.suppply(usdcTokenAddress, AMOUNT, deployer, 0)
    console.log("Supplied USDC as Collateral!")
    // Getting your borrowing stats
    let { availableBorrowsETH} = await getBorrowUserData(lendingPool, deployer)
    const amountGhoToBorrow = availableBorrowsETH.toString()
    const amountGhoToBorrowWei = ethers.utils.parseEther(amountGhoToBorrow.toString())
    console.log(`You can borrow ${amountGhoToBorrow.toString()} GHO`)
    await borrowGho(
        ghoTokenAddress,
        lendingPool,
        amountGhoToBorrowWei,
        deployer
    )
    await getBorrowUserData(lendingPool, deployer)
    await repay(
        amountGhoToBorrowWei,
        ghoTokenAddress,
        lendingPool,
        deployer
    )
    await getBorrowUserData(lendingPool, deployer)
}

async function repay(amount, ghoTokenAddress, lendingPool, account) {
    await approveErc20(ghoTokenAddress, lendingPool.address, amount, account)
    const repayTx = await lendingPool.repay(ghoTokenAddress, amount, BORROW_MODE, account)
    await repayTx.wait(1)
    console.log("Repaid!")
}

async function borrowGho(ghoTokenAddress, lendingPool, amountGhoToBorrow, account) {
    const borrowTx = await lendingPool.borrow(ghoTokenAddress, amountGhoToBorrow, BORROW_MODE, 0, account)
    await borrowTx.wait(1)
    console.log("You've borrowed!")
}

async function approveErc20(usdcTokenAddress, spenderAddress, amount, signer) {
    const erc20Token = await ethers.getContractAt("IUsdc", usdcTokenAddress, signer)
    txResponse = await erc20Token.approve(spenderAddress, amount)
    await txResponse.wait(1)
    console.log("Approved!")
}

async function getBorrowUserData(lendingPool, account) {
    const {
        totalCollateralETH,
        totalDebtETH,
        availableBorrowsETH
    } = await lendingPool.getUserAccountData(account)
    console.log(`You have ${totalCollateralETH} worth of ETH deposited.`)
    console.log(`You have ${totalDebtETH} worth of ETH borrowed.`)
    console.log(`You can borrow ${availableBorrowsETH} worth of ETH.`)
    return { availableBorrowsETH, totalDebtETH }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })