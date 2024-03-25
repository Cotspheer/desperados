//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./WorldActionMining.sol";

contract DesperadosWorld is WorldActionMining {
    function mineOre(address _caller) external returns (uint256 reward) {
        return _mineOre(_caller);
    }
}
