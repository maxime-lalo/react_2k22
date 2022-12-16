import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";

import { MessageModel } from "../../models/modelMessage";
import { io } from "socket.io-client";

// get URL_WS from .env file
const URL_WS = process.env.REACT_APP_URL_WS ? process.env.REACT_APP_URL_WS : "http://localhost:5000";

const socket = io( URL_WS , { transports: ["websocket"] });

function Home() {


    const messages = useRef<MessageModel[]>([]);


  useEffect(() => {
    console.log("messagesChat: " + messages);
  }, [messages]);

 
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server.");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server.");
    });
    socket.on("message", (msg) => {
      console.log("message: " + msg);
      // si le msg contient un objet avec un attribut "message" alors on affiche le message
      if (msg) {

         var msgObject = MessageModel.fromArrayToMessageArray(msg);
        // set messages.current to the new message
        messages.current =  msgObject;
     

        console.log("messages: " + messages);

        var msgBox = document.getElementsByClassName("Chat__container__messages")[0];  

        msgBox.innerHTML = "";
        messages.current.forEach((message) => {

            var div = document.createElement("div");
            div.className = "Chat__container__messages__message";
            var p = document.createElement("p");
            p.innerHTML = message.userName + " : " + message.text;
            p.style.color = randomColorFromUsername(message.userName);
            div.appendChild(p);
            
            msgBox.appendChild(div);
        });
        msgBox.scrollTop = msgBox.scrollHeight;
               
    }
    });
    // gestion si le socket ne se connecte pas
    socket.on("connect_error", (err) => {
         var msgBox = document.getElementsByClassName("Chat__container__messages")[0];  

        msgBox.innerHTML = "<h1>Erreur d'accès au serveur de chat</h1>";
        msgBox.classList.add("Chat__container__messages__error");

        console.log("Error: " + err);
        }
        
    );
  }, [socket]);

 
  return (
    <div className="Chat">
      <h1>ChatBox</h1>

      <div className="Chat__container">
        <div className="Chat__container__messages">
        
        </div>
        <div className="Chat__container__input">
            <input className="messageEntered" type="text" placeholder="Type your message here" />
            <button onClick={onMessageSubmit}>Send</button>

            </div>
      </div>
    </div>
  );

  
}


function onMessageSubmit() {

    const element = document.getElementsByClassName('messageEntered')[0] as HTMLInputElement;
   
    var message = element.value;

    if (message.length > 0 && message.length < 100) {
        
    socket.emit('message', { id: 1, text: message, userName: localStorage.getItem("userName") ? localStorage.getItem("userName") : generateUserName() })   
    }
    else
    {
        alert("Message must be between 1 and 100 characters")
    }

    element.value = "";
 
}

function generateUserName() {
    
    var userName = "User" + Math.floor(Math.random() * 1000);
   
  
    return userName;
}   

function randomColorFromUsername(username: string) {
    var hash = 0;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
       var value = (hash >> (i * 8)) & 0xFF;
       color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
 }

export default Home;
