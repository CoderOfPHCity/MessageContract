// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// contract Lock {
//     uint public unlockTime;
//     address payable public owner;

//     event Withdrawal(uint amount, uint when);

//     constructor(uint _unlockTime) payable {
//         require(
//             block.timestamp < _unlockTime,
//             "Unlock time should be in the future"
//         );

//         unlockTime = _unlockTime;
//         owner = payable(msg.sender);
//     }

//     function withdraw() public {
//         // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
//         // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

//         require(block.timestamp >= unlockTime, "You can't withdraw yet");
//         require(msg.sender == owner, "You aren't the owner");

//         emit Withdrawal(address(this).balance, block.timestamp);

//         owner.transfer(address(this).balance);
//     }
// }


contract Lock{
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}



// import React, { useState } from "react";
// import { ethers } from "ethers";
// import contractABI from "./abi.json";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState(null);
//   //address
//   const contractAddress = "0xbb17c0DE13a76eF57e9b00020f712A1740A8cf01";

//   // async function for accessing metamask in our browser
//   async function requestAccount() {
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//   }

//   //getMessage function using ethers
//   async function getMessage() {
//     if (typeof window.ethereum !== "undefined") {
//       // await requestAccount();
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const contract = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         signer
//       );

//       try {
//         const getMsg = await contract.getMessage();
//         setMessage(getMsg);
//         console.log("Message retrieved");
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     }
//   }

//   return (
//     <div className="App">
//       <button onClick={requestAccount}>Connect Wallet</button>
//       <h1>{message ? message : ""}</h1>
//       <button onClick={getMessage}>getMessage</button>

//       form
//     </div>
//   );
// }

// export default App;
