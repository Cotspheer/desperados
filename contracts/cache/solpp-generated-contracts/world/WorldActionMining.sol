pragma solidity ^0.8.0;

//SPDX-License-Identifier: Unlicense


import "./WorldBase.sol";
import "../currency/DesperadosTokens.sol";
import "../lib/PseudoRandom.sol";

contract WorldActionMining is WorldBase, DesperadosTokens {
    uint16 constant WorldActionArenaActionType = 1;

    function _mineOre(address _caller) internal returns (uint256 reward) {
        require(
            actionCooldowns[_caller].cooldownTimestamp <=
                uint64(block.timestamp),
            "WorldActionMining: You can't mine that fast."
        );

        uint64 nextReadyTime;
        (nextReadyTime) = _setWorldActionCooldownTime(
            _caller,
            WorldActionArenaActionType,
            worldActionCooldownsSeconds[2]
        );

        uint256 rand = PseudoRandom.randMod(100);
        uint256 baseReward = 1000;
        uint256 reducedReward = (baseReward / 100) * (100 - rand);

        _rewardDesos(_caller, reducedReward);

        return reducedReward;
    }
}
