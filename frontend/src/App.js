// import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import abi from './abi.json';

// const contractAddress = '0x8FE2d0B383A7C70f544380C420c3b7bfa33A1c8f'; // Replace with your actual contract address

// const Lock = () => {
//   const [message, setMessage] = useState('');
//   const [newMessage, setNewMessage] = useState('');

//   const contract = new ethers.Contract(contractAddress, abi, ethers.getDefaultProvider());

//   const handleMessageChange = (event) => setNewMessage(event.target.value);

//   async function requestAccount() {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//   }

//   const setMessageOnClick = async () => {
//     await requestAccount();
//     await contract.setMessage(newMessage);
//     setMessage(newMessage);
//   };

//   const getMessage = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       await requestAccount();
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       console.log(signer)
//       const contract = new ethers.Contract(contractAddress, abi, signer);

//       try {
//         const getMsg = await contract.getMessage();
//         setMessage(getMsg);
//         console.log('Message retrieved');
//       } catch (err) {
//         console.error('Error:', err);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Lock App</h1>
//       <div>
//         <label>New Message:</label>
//         <input type="text" value={newMessage} onChange={handleMessageChange} />
//         <button onClick={setMessageOnClick}>Set Message</button>
//       </div>
//       <div>
//         <button onClick={getMessage}>Get Message</button>
//         <p>Current Message: {message}</p>
//       </div>
//     </div>
//   );
// };  

// export default Lock;


import React, { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import "./App.css";

function Lock() {
  const [msg, setMsg] = useState("");
  const [retrieveMsg, setRetrieveMsg] =useState("...message")

  const handleMessageChange =(e)=>{
    setMsg(e.target.value)
  }
  //address
  const contractAddress = "0x8FE2d0B383A7C70f544380C420c3b7bfa33A1c8f";

  // async function for accessing metamask in our browser
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  //getMessage function using ethers
  async function setMessage() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.setMessage(msg);
        await transaction.wait()
        console.log("Message sent");
        setMsg("")
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getMessage() {
    if (typeof window.ethereum !== "undefined") {
      // await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getMessage();
        console.log("Message retrieved");
        setRetrieveMsg(transaction)
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }
  return (
    <div className="App">
      
      <div class="form-container">
      <h3>New Message</h3>
        <input type="text" value={msg} onChange={handleMessageChange} />
      <button onClick={setMessage}>Send Message</button>
      <button onClick={getMessage}>GetMessage</button>
      <h6>{retrieveMsg}</h6>
      </div>


    </div>
  );
}

export default Lock;



