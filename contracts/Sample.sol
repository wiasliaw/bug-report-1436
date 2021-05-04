// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Foo {
    function printBalance() public view returns (uint256) {
        return msg.sender.balance;
    }
}
