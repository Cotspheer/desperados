pragma solidity ^0.8.0;

// SPDX-License-Identifier: GPL-3.0+



import "@openzeppelin/contracts/utils/Context.sol";

import "../core/Monetizable.sol";

abstract contract WorldBase is Context, Monetizable {
    uint16 constant WorldActionDoneActionType = 0;

    uint8[10] public worldActionASuccessProbabilities = [
        uint8(90), // 0 | Easy
        uint8(80), // 1 |
        uint8(70), // 2 |
        uint8(60), // 3
        uint8(50), // 4
        uint8(40), // 5
        uint8(30), // 6
        uint8(20), // 7
        uint8(10), // 8
        uint8(5) // 9
    ];

    uint32[11] public worldActionCooldownsSeconds = [
        uint32(1 seconds), // 0
        uint32(2 seconds), // 1
        uint32(3 seconds), // 2
        uint32(4 seconds), // 3
        uint32(5 seconds), // 4
        uint32(10 seconds), // 5
        uint32(20 seconds), // 6
        uint32(30 seconds), // 7
        uint32(40 seconds), // 8
        uint32(50 seconds), // 9
        uint32(60 seconds) // 10
    ];

    uint32[15] public worldActionCooldowns = [
        uint32(0 seconds), // 0
        uint32(1 minutes), // 1
        uint32(2 minutes), // 2
        uint32(5 minutes), // 3
        uint32(10 minutes), // 4
        uint32(30 minutes), // 5
        uint32(1 hours), // 6
        uint32(2 hours), // 7
        uint32(4 hours), // 8
        uint32(8 hours), // 9
        uint32(16 hours), // 10
        uint32(1 days), // 11
        uint32(2 days), // 12
        uint32(4 days), // 13
        uint32(7 days) // 14
    ];

    struct WorldAction {
        uint16 actionType;
        uint64 cooldownTimestamp;
    }

    mapping(address => WorldAction) actionCooldowns;

    function _setWorldActionCooldownTime(
        address _caller,
        uint16 actionType,
        uint32 cooldownTime
    ) internal returns (uint64 cooldownTimestamp) {
        cooldownTimestamp = uint64(block.timestamp + cooldownTime);

        actionCooldowns[_caller] = WorldAction(actionType, cooldownTimestamp);
    }

    function _setWorldActionDone(address _caller) internal {
        // set to done action and current stamp for "now"
        WorldAction storage currentCooldown = actionCooldowns[_caller];

        currentCooldown.actionType = WorldBase.WorldActionDoneActionType;
        currentCooldown.cooldownTimestamp = uint64(block.timestamp); // now
    }

    function getCurrentWorldActionCooldownFor(address _caller)
        external
        view
        returns (WorldAction memory)
    {
        return actionCooldowns[_caller];
    }

    function completeWorldActionCooldown(address _caller) external payable {
        require(
            actionCooldowns[_caller].actionType !=
                WorldBase.WorldActionDoneActionType,
            "WorldBase: No ongoing actions to complete."
        );

        uint64 timeLeft = actionCooldowns[_caller].cooldownTimestamp -
            uint64(block.timestamp); // seconds left
        uint256 requiredFee = timeLeft * _baseFee;

        require(
            msg.value >= requiredFee,
            "WorldActions: Not enough fee provided"
        );

        // set to done action and current stamp for "now"
        WorldAction storage currentCooldown = actionCooldowns[_caller];

        currentCooldown.cooldownTimestamp = uint64(block.timestamp); // now

        // refund not used fee
        uint256 notUsedFee = msg.value - requiredFee;

        if (notUsedFee > 0) {
            payable(_msgSender()).transfer(notUsedFee);
        }
    }

    function getCompleteWorldActionCooldownEstimatedFee(address _caller)
        external
        view
        returns (uint256 estimatedFeeToPay)
    {
        uint64 timeLeft = actionCooldowns[_caller].cooldownTimestamp -
            uint64(block.timestamp); // seconds left

        require(timeLeft > 0);

        estimatedFeeToPay = timeLeft * _baseFee; // to remove a 24h cooldown a user has to pay about 4$ (4146 USD / ETH)

        if (estimatedFeeToPay > maxPaymentFeeForAnyAction) {
            estimatedFeeToPay = maxPaymentFeeForAnyAction;
        }
    }
}
