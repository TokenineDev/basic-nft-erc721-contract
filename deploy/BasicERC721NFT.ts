import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy("BasicERC721NFT", {
    from: deployer,
    log: true,
    args: ["NFT TEST TOKEN", "NFTT"],
  });
};
export default func;
func.tags = ["BasicERC721NFT"];
