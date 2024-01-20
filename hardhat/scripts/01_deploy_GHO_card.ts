import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import "hardhat-deploy";

/**
 * Deploys a contract named "GHOCard" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployGHOCard: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("GHOCard", {
    from: deployer,
    // Aave Pool Provider
    args: [],
    log: true,
  });

};

export default deployGHOCard;

// Tags are useful if you have multiple deploy files and only want to run one of them.
deployGHOCard.tags = ["GHOCard"];
