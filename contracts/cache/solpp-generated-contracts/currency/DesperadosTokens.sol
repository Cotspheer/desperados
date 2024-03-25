pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT


import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract DesperadosTokens is ERC1155, ERC1155Holder {
    string public constant TOKEN_NAME = "DES";

    uint256 public constant DESOS = 0;
    uint256 public constant DESOS_FREE = 1;

    uint256 public constant MINE = 100;
    uint256 public constant TRADING_POST = 101;
    uint256 public constant SALOON = 102;
    uint256 public constant HOTEL = 103;
    uint256 public constant TRAIN_STATION = 104;

    uint256 public constant WORKER = 200;

    constructor() ERC1155("https://game.example/api/item/{id}.json") {
        uint256 desosToMint = 1;
        _mint(address(this), DESOS, desosToMint * 10**9, "0x0"); // 1'000'000'000 to the contract's pool
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155, ERC1155Receiver)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getFreeDesos(address recipient) public {
        require(
            balanceOf(recipient, DESOS_FREE) == 0,
            "you already have received your free DESOS"
        );

        _safeTransferFrom(address(this), recipient, DESOS, 1000, "0x0");

        _mint(recipient, DESOS_FREE, 1, "0x0");
    }

    function _rewardDesos(address recipient, uint256 amount) public {
        _safeTransferFrom(address(this), recipient, DESOS, amount, "0x0");
    }

    function mintMine(address recipient) public {
        require(balanceOf(recipient, MINE) < 10, "Max reached");
        _mint(recipient, MINE, 1, "0x0");
    }

    function mintHotel(address recipient) public {
        require(balanceOf(recipient, DESOS) >= 1000, "Insufficient Desos");
        require(balanceOf(recipient, HOTEL) < 10, "Max reached");

        _safeTransferFrom(recipient, address(this), DESOS, 1000, "0x0");

        _mint(recipient, HOTEL, 1, "0x0");
    }
}

// https://github.com/ProjectOpenSea/opensea-erc1155
// https://docs.openzeppelin.com/contracts/3.x/gsn
// https://docs.openzeppelin.com/learn/sending-gasless-transactions
// https://docs.openzeppelin.com/contracts/3.x/erc1155
// https://learn.figment.io/tutorials/celo-hardhat-deploy-and-nft-app
// https://www.quicknode.com/guides/solidity/how-to-create-and-deploy-an-erc-1155-nft
// https://medium.com/@kidinamoto/library-driven-development-of-solidity-ec7b0b41f38
// https://github.com/merklejerk/solpp
// https://hardhat.org/hardhat-network
