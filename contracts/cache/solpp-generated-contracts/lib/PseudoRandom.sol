pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT



library PseudoRandom {
    /// @dev _modulus = 100 => returns value from 0 to 99
    function randMod(uint256 _modulus) internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        block.gaslimit,
                        msg.sender
                    )
                )
            ) % _modulus;
    }

    function rand() internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        block.gaslimit,
                        msg.sender
                    )
                )
            );
    }
}
