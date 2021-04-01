import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginMenu from '../pages/Login.jsx'
import '../App.css';
import Cookies from './Cookies.js';
import MyEvents from './Events.js';
import Chat from '../pages/chat';
var MyIP = "";
var roomid = 0;
var flag = false;
if(document.location.toString().includes("chat")){
  var msgEvent = new EventSource(Cookies.getCookie("Ip") + "/sse");

  if(!flag){

    msgEvent.addEventListener("getrooms",msg =>{
      var json = JSON.parse(msg.data);
      const personObjectEntries = Object.entries(json);
      const personObjectEntriesNumberKeys = personObjectEntries.map(person => {
    // person[0] = parseInt(person[0]);
      return person;
      });
      var rooms = document.getElementById("rooms");
      if(rooms != null){
        rooms.innerHTML = '';
      }
      const personsMap = new Map(personObjectEntriesNumberKeys);
      var t  = document.getElementsByName("Send");
      for (const key of personsMap.keys()) {
      var val = personsMap.get(key);
      if(rooms !=null){
        var newElement = document.createElement("li");
        newElement.id = key.replace("*","");
        newElement.onclick = ChatCode.GetMsgs;
        newElement.className = "room";
        
        if(t.id == key){
          newElement.style.background = "rgba(49, 91, 139, 0.815)";
        }
        var ChatName = document.createElement("div");
        ChatName.className = "roomname";
        
        if(key.includes("*")){
          ChatName.className = "pmname";
          var nam = Cookies.getCookie("name");
          val = val.replace(nam, "").replace("*","");
          
          
        } 
        ChatName.innerHTML = val;
        newElement.append(ChatName);
        rooms.append(newElement);  

      }
      }
    });
    flag = true;
    msgEvent.addEventListener("connected", msg =>{
      var h = msg.data;
      var req = new XMLHttpRequest();
      req.open("POST", Cookies.getCookie("Ip") + "/check-in");
      var json = JSON.stringify(Cookies.getCookie("name") +":" + h);
      req.send(json);
    });
    msgEvent.addEventListener("msgsrecieve", msg =>{
      let newDive = document.getElementById("chat"); 
      
      if(newDive != null){
        newDive.innerHTML = '';
      }
      var json = JSON.parse(msg.data);
      const personObjectEntries = Object.entries(json);
      const personObjectEntriesNumberKeys = personObjectEntries.map(person => {
      person[0] = parseInt(person[0]);
      return person;
      });
      const personsMap = new Map(personObjectEntriesNumberKeys);
      for (const key of personsMap.keys()) {
        var newElement = document.createElement("li");
        newElement.className = "lichat";
        var val = personsMap.get(key);
        var sender = val.substring(val.indexOf("sender=")+7, val.indexOf(", message="));
        var message = ": " + val.substring(val.indexOf(", message=")+10, val.length-1);
        var pname = document.createElement("span");
        pname.innerHTML = sender;
        pname.className = "liname"; 
        var pmsg = document.createElement("span");
        pmsg.innerHTML = message;
        pmsg.className = "limsg";
        newElement.prepend(pname);
        newElement.append(pmsg);
        if(newDive != null)
        newDive.insertBefore(newElement, newDive.childNodes[0]);
      }
      
      
    });
    msgEvent.addEventListener("message",msg =>{
      let newDive = document.getElementById("chat"); 
      var newElement = document.createElement("li");
      newElement.className = "lichat";
      var strr = msg.data;
      var id = strr.substring(0, strr.indexOf(":"));
      var senderMsg = document.getElementsByName("Send");
      if(id == senderMsg.id){
        
        strr = strr.replace(id+":", "");
        var pname = document.createElement("span");
        pname.innerHTML = strr.substring(0,strr.indexOf(":")+1);
        pname.className = "liname"; 
        var pmsg = document.createElement("span");
        pmsg.innerHTML = strr.substring(strr.indexOf(":")+1, strr.length);
        pmsg.className = "limsg";
        newElement.prepend(pname);
        newElement.append(pmsg);
        if(newDive != null)
        newDive.insertBefore(newElement, newDive.childNodes[0]);
      }
    });
    msgEvent.addEventListener("error", msg =>{
      
        //alert(msg.data.toString());
    });
    msgEvent.addEventListener("getusers",msg =>{
      var json = JSON.parse(msg.data);
      const personObjectEntries = Object.entries(json);
      const personObjectEntriesNumberKeys = personObjectEntries.map(person => {
    // person[0] = parseInt(person[0]);
      return person;
      });
      
      var users = document.getElementById("dudesid");
      if(users != null){
        users.innerHTML = '';
      }
      const personsMap = new Map(personObjectEntriesNumberKeys);
      for (const key of personsMap.keys()) {
        var val = personsMap.get(key);
        var type = key.split(" ")[1];
        var userid = key.split(" ")[0];
        if(users !=null){
          var newElement = document.createElement("li");
          newElement.id = userid;
          //newElement.onclick = ChatCode.GetMsgs;
          newElement.className = "room";
          
          var ChatName = document.createElement("div");
          ChatName.className = "roomname";
          
          if(key.includes("*")){
            ChatName.className = "pmname";
            var nam = Cookies.getCookie("name");
            val = val.replace(nam, "").replace("*","");
            
            
          } 
          ChatName.innerHTML = val;
          newElement.append(ChatName);
          users.append(newElement);  
  
        }
        }
      
      
    });
    
    
}
}

class ChatCode extends Component {
  
  render() {
    return 0;
  }
  static ModalStatus = 0;
  static AddNewUserInRoom(){
    var senderMsg = document.getElementsByName("Send");
      if(senderMsg.id != undefined){
        
        var p = prompt("Введите имя пользователя, которого хотите добавить");
        var request = new XMLHttpRequest();
        request.open("POST", Cookies.getCookie("Ip") + "/addnewclientinroom");
        var json = JSON.stringify(senderMsg.id.replace("*","")+":" + Cookies.getCookie("name") + ":" + p);
        request.send(json);
      }
      else{
        alert("Выберите беседу");
      }
  }
  static GetName(){
    MyIP = Cookies.getCookie("Ip");

  }
  static SendMSG(){
    
    var request = new XMLHttpRequest();
    request.open("POST", Cookies.getCookie("Ip") + "/send-message");
    var msgbar = document.getElementById("message");
    var senderMsg = document.getElementsByName("Send");
    
    if(senderMsg.id != undefined){
      
      var json = JSON.stringify(Cookies.getCookie("name") + ":" + senderMsg.id+ ":" + msgbar.value );
      request.send(json);
      msgbar.value = "";
    }
    else{
      alert("Выберите беседу");
    }

  }
  static AddGroup(){
    let groupName = document.getElementById("groupName");
    var p = groupName.value;
    if(p!= "") {
      var request = new XMLHttpRequest();
      request.open("POST", Cookies.getCookie("Ip") + "/create-room");  
      var json = JSON.stringify(Cookies.getCookie("name") + ":" + p);
      request.send(json);
      groupName.value = "";
      document.location= "#close";
      this.ModalStatus = 0;
    }

  }
  static GetMsgs(id){
    var idd = document.getElementsByName("Send").id;
    
    var idd2 = document.getElementById(idd);
    if(idd2!=null)
    idd2.style.background = "rgba(28, 53, 82, 0.815)";
    let newDive = document.getElementById("chat"); 
    if(newDive != null){
      newDive.innerHTML = '';
    }
    var request = new XMLHttpRequest();
    var senderMsg = document.getElementsByName("Send");
    roomid = this.id;
    this.style.background = "rgba(49, 91, 139, 0.815)";
    senderMsg.id = this.id;
    request.open("POST", Cookies.getCookie("Ip") + "/getmsgs"); 
    var json = JSON.stringify(Cookies.getCookie("name") + ":" + this.id.replace("*",""));
    request.send(json);

  }

  static AddPm(){
    let username = document.getElementById("usernameToPM");
    var p = username.value;
    if(p!= "") {
      var request = new XMLHttpRequest();
      request.open("POST", Cookies.getCookie("Ip") + "/create-pm");  
      var json = JSON.stringify(Cookies.getCookie("name") + ":" + p);
      request.send(json);
      username.value = "";
      document.location= "#close";
      this.ModalStatus = 0;
    }

  }
  static RemoveUser(){
    var request = new XMLHttpRequest();
    var senderMsg = document.getElementsByName("Send");
    
    var request = new XMLHttpRequest();
    request.open("POST", Cookies.getCookie("Ip") + "/leave-room");  
    var json = JSON.stringify(roomid + ":" +Cookies.getCookie("name"));
    request.send(json);

  }

  static DeleteRoom(){
    var request = new XMLHttpRequest();
    var senderMsg = document.getElementsByName("Send");
    
    var request = new XMLHttpRequest();
    request.open("POST", Cookies.getCookie("Ip") + "/remove-room");  
    var json = JSON.stringify(roomid + ":" +Cookies.getCookie("name"));
    request.send(json);
  }


}
export default ChatCode;