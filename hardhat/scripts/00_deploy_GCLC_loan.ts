import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import "hardhat-deploy";

/**
 * Deploys a contract named "GCLCLoan" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployGCLCLoan: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("GCLCLoan", {
    from: deployer,
    // Aave Pool Provider
    args: ["0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"],
    log: true,
  });

};

export default deployGCLCLoan;

// Tags are useful if you have multiple deploy files and only want to run one of them.
deployGCLCLoan.tags = ["GCLCLoan"];
