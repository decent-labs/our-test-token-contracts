import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments: { deploy }, getNamedAccounts } = hre
  const { deployer } = await getNamedAccounts()

  const config = {
    log: true,
    from: deployer,
    args: ["Our Test Token", "OTT", "21000000"],
  }

  await deploy("OurTestToken", config)
}

export default func
