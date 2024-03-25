import { expect } from "chai";
import { ethers } from "hardhat";

const DESOS: number = 0;
const DESOS_FREE: number = 1;

const MINE: number = 100;
const TRADING_POST: number = 101;
const SALOON: number = 102;
const HOTEL: number = 103;
const WORKER: number = 104;

describe("DesperadosCore", function () {
  describe("DesperadosTokens", function () {
    it("should have 1'000'000'000 Desos in the pool", async function () {
      const accounts = await ethers.getSigners();

      const DesperadosCoreContractFactory = await ethers.getContractFactory("DesperadosCore");
      const desperadosCore = await DesperadosCoreContractFactory.deploy();

      await desperadosCore.deployed();

      const deploymentAddressBalance = await desperadosCore.balanceOf(accounts[0].address, DESOS);
      const contractAddressBalance = await desperadosCore.balanceOf(desperadosCore.address, DESOS);

      expect(0).to.equal(Number(deploymentAddressBalance.toString()));
      expect(1000000000).to.equal(Number(contractAddressBalance.toString()));
    });

    it("should be possible to get free desos to start playing", async function () {
      const accounts = await ethers.getSigners();

      const DesperadosCoreContractFactory = await ethers.getContractFactory("DesperadosCore");
      const desperadosCore = await DesperadosCoreContractFactory.deploy();

      await desperadosCore.deployed();

      await desperadosCore.getFreeDesos(accounts[0].address);

      const deploymentAddressBalance = await desperadosCore.balanceOf(accounts[0].address, DESOS);
      const contractAddressBalance = await desperadosCore.balanceOf(desperadosCore.address, DESOS);

      expect(1000).to.equal(Number(deploymentAddressBalance.toString()));
      expect(1000000000 - 1000).to.equal(Number(contractAddressBalance.toString()));
    });

    it("should not be possible to receive multiple times free desos", async function () {
      const accounts = await ethers.getSigners();

      const DesperadosCoreContractFactory = await ethers.getContractFactory("DesperadosCore");
      const desperadosCore = await DesperadosCoreContractFactory.deploy();

      await desperadosCore.deployed();

      await desperadosCore.getFreeDesos(accounts[0].address);
      await expect(desperadosCore.getFreeDesos(accounts[0].address)).to.be.reverted;

      const deploymentAddressBalance = await desperadosCore.balanceOf(accounts[0].address, DESOS_FREE);
      const contractAddressBalance = await desperadosCore.balanceOf(desperadosCore.address, DESOS);

      expect(1).to.equal(Number(deploymentAddressBalance.toString()));
      expect(1000000000 - 1000).to.equal(Number(contractAddressBalance.toString()));
    });


    it("should be able to buy hotels", async function () {
      const accounts = await ethers.getSigners();

      const DesperadosCoreContractFactory = await ethers.getContractFactory("DesperadosCore");
      const desperadosCore = await DesperadosCoreContractFactory.deploy();

      await desperadosCore.deployed();

      await desperadosCore.getFreeDesos(accounts[0].address);
      await desperadosCore.mintHotel(accounts[0].address);

      const deploymentAddressBalance = await desperadosCore.balanceOf(accounts[0].address, DESOS);
      const contractAddressBalance = await desperadosCore.balanceOf(desperadosCore.address, DESOS);

      expect(0).to.equal(Number(deploymentAddressBalance.toString()));
      expect(1000000000).to.equal(Number(contractAddressBalance.toString()));
    });
  });
});