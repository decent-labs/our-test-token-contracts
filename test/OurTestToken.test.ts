import { ethers, deployments } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { OurTestToken } from "../typechain";
import { BigNumber } from "ethers";

describe("Our Test Token", function () {
  let deployer: SignerWithAddress;
  let ourTestToken: OurTestToken;

  beforeEach(async function () {
    [deployer] = await ethers.getSigners();
    await deployments.fixture();
    ourTestToken = await ethers.getContract("OurTestToken");
  });

  describe("identification", function () {
    it("has the correct name", async function () {
      expect(await ourTestToken.name()).to.eq("Our Test Token");
    });

    it("has the correct symbol", async function () {
      expect(await ourTestToken.symbol()).to.eq("OTT");
    });
  });

  describe("supply", function () {
    let decimals: number, expectedSupply: BigNumber;

    beforeEach(async function () {
      decimals = await ourTestToken.decimals();
      expectedSupply = ethers.utils.parseUnits("21000000", decimals);
    });

    it("has the correct total supply", async function () {
      expect(await ourTestToken.totalSupply()).to.eq(expectedSupply);
    });
  
    it("assigned all tokens to correct owner", async function () {
      expect(await ourTestToken.balanceOf(deployer.address)).to.eq(expectedSupply);
    });
  });
});
