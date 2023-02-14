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
      name: "AutomationBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationBase__factory>;
    getContractFactory(
      name: "AutomationCompatible",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationCompatible__factory>;
    getContractFactory(
      name: "AutomationCompatibleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationCompatibleInterface__factory>;
    getContractFactory(
      name: "AutomationRegistryBaseInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationRegistryBaseInterface__factory>;
    getContractFactory(
      name: "AutomationRegistryExecutableInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationRegistryExecutableInterface__factory>;
    getContractFactory(
      name: "AutomationRegistryInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationRegistryInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "Company",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Company__factory>;
    getContractFactory(
      name: "CompanyFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompanyFactory__factory>;
    getContractFactory(
      name: "KeeperRegistrarInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeeperRegistrarInterface__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;

    getContractAt(
      name: "AutomationBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationBase>;
    getContractAt(
      name: "AutomationCompatible",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationCompatible>;
    getContractAt(
      name: "AutomationCompatibleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationCompatibleInterface>;
    getContractAt(
      name: "AutomationRegistryBaseInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationRegistryBaseInterface>;
    getContractAt(
      name: "AutomationRegistryExecutableInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationRegistryExecutableInterface>;
    getContractAt(
      name: "AutomationRegistryInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationRegistryInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "Company",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Company>;
    getContractAt(
      name: "CompanyFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompanyFactory>;
    getContractAt(
      name: "KeeperRegistrarInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeeperRegistrarInterface>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;

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
