// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Lock {
    address payable public winner;
    address payable public player1;
    address payable public player2;
    uint256 public playerCount = 0;

    mapping(address => uint) public userWallet;
    


    function setPlayerCount() public {
        playerCount += 1;
    }

    function getPlayerCount() public view returns(uint256) {
        return playerCount;
    }

    function betPlayer1(address payable _player1) payable public {
        player1 = _player1;

        userWallet[player1] += msg.value;
    }

    function betPlayer2(address payable _player2) payable public {
        player2 = _player2;

        userWallet[player2] += msg.value;
    }

    function revealWinner(address payable _winner) public {
        winner = _winner;
    }

    function collect() public {
        
        (bool sent,) = payable(winner).call{value: userWallet[player1] + userWallet[player2]}("");
        if(sent) {
            userWallet[winner] += userWallet[winner == player1 ? player1 : player2];
            userWallet[winner == player1 ? player2 : player1] -= userWallet[winner == player1 ? player2 : player1];

        }

    }
}
