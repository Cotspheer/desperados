pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT



import "./Monetizable.sol";
import "./Configuration.sol";

import "@openzeppelin/contracts/utils/Context.sol";

contract Base is Context, Monetizable, Configuration {}
