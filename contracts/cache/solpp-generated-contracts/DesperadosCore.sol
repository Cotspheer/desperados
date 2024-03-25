pragma solidity ^0.8.0;

//SPDX-License-Identifier: Unlicense


import "./core/Base.sol";
import "./currency/DesperadosTokens.sol";
import "./world/DesperadosWorld.sol";

import "@opengsn/contracts/src/BaseRelayRecipient.sol"; // BaseRelayRecipient

contract DesperadosCore is Base, DesperadosTokens, DesperadosWorld {}
