// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Monetizable is Ownable, ReentrancyGuard {
    uint256 maxPaymentFeeForAnyAction = 1 ether;
    uint256 internal _baseFee = 0.00000001 ether; // starting point for further adjustments

    function setBaseFee(uint256 baseFee) external onlyOwner {
        _baseFee = baseFee;
    }

    modifier providesFee(uint256 fee) {
        require(msg.value == fee, "Monetizable: Submited fee doesn't match.");
        _;
    }

    function withdraw() external onlyOwner nonReentrant {
        require(
            address(this).balance > 0,
            "Monetizable: No funds on the contract available"
        );

        payable(owner()).transfer(address(this).balance);
    }
}
