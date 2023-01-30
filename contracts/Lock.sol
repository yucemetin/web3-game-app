// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Strings.sol";


contract Lock {
    address payable public winner;
    uint256 amount;
    TransactionPaying[] public payArray;
    TransactionPrizing[] public prizeArray;

    struct TransactionPaying {
        address player;
        uint256 payAmount;
    }

    struct TransactionPrizing {
        address player;
        uint256 payAmount;
    }

    mapping(address => uint) public userWallet;

    event TransactionPay(TransactionPaying[] arr);
    event TransactionPrize(TransactionPrizing[] arr);

    function getBalance(address _player) public view returns (uint256) {
        return userWallet[_player];
    }
    
    function betPlayer(address payable _player) payable public {
        userWallet[_player] += msg.value;
        amount = msg.value;
        payArray.push(TransactionPaying(_player,msg.value));

        emit TransactionPay(payArray);
    }

    function revealWinner(address payable _winner) public {
        winner = _winner;
    }

    function draw(address payable _player) public {
        (bool sent,) = payable(_player).call{value: userWallet[_player] }(""); 

        if(sent) {
            prizeArray.push(TransactionPrizing(_player,userWallet[_player]));
            emit TransactionPrize(prizeArray);
            userWallet[_player] = 0;
        }
    }

    function collect(address payable _player1, address payable _player2) public {
        
        (bool sent,) = payable(winner).call{value: (userWallet[_player1] + userWallet[_player2])}("");
        if(sent) {
            prizeArray.push(TransactionPrizing(winner,(userWallet[_player1] + userWallet[_player2])));
            emit TransactionPrize(prizeArray);
            userWallet[_player1] = 0;
            userWallet[_player2] = 0;
        }
    }
}
