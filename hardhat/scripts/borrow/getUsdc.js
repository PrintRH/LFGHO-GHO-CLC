const { Signer } = require("ethers");
const { ethers, getNamedAccounts } = require("hardhat")

// Temporary value, will programmatically submit value in frontend
const AMOUNT = ethers.parseUnits("500000000", "wei");

async function getUsdc() {
    const { deployer } = await getNamedAccounts()
    const iUsdc = await ethers.getContractAt(
        "IUsdc",
        "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
        signer
    )
    const txResponse = await iUsdc.transfer({
        signer,
        value: AMOUNT,
    })
    await txResponse.wait(1);
    const usdcBalance = await iUsdc.balanceOf(signer);
    console.log(`Got ${usdcBalance.toString()} USDC`);
}

module.exports = { getUsdc, AMOUNT }