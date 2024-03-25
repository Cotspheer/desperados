/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BaseRelayRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseRelayRecipient__factory>;
    getContractFactory(
      name: "IRelayRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRelayRecipient__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Base",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Base__factory>;
    getContractFactory(
      name: "Configuration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Configuration__factory>;
    getContractFactory(
      name: "Monetizable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Monetizable__factory>;
    getContractFactory(
      name: "DesperadosTokens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DesperadosTokens__factory>;
    getContractFactory(
      name: "DesperadosCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DesperadosCore__factory>;
    getContractFactory(
      name: "DesperadosWorld",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DesperadosWorld__factory>;
    getContractFactory(
      name: "WorldActionMining",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WorldActionMining__factory>;
    getContractFactory(
      name: "WorldBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WorldBase__factory>;

    getContractAt(
      name: "BaseRelayRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseRelayRecipient>;
    getContractAt(
      name: "IRelayRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRelayRecipient>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Base",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Base>;
    getContractAt(
      name: "Configuration",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Configuration>;
    getContractAt(
      name: "Monetizable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Monetizable>;
    getContractAt(
      name: "DesperadosTokens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DesperadosTokens>;
    getContractAt(
      name: "DesperadosCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DesperadosCore>;
    getContractAt(
      name: "DesperadosWorld",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DesperadosWorld>;
    getContractAt(
      name: "WorldActionMining",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WorldActionMining>;
    getContractAt(
      name: "WorldBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WorldBase>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}