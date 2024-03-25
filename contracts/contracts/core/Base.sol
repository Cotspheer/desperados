// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Monetizable.sol";
import "./Configuration.sol";

import "@openzeppelin/contracts/utils/Context.sol";

contract Base is Context, Monetizable, Configuration {}
