import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginMenu from '../pages/Login.jsx'
import Cookies from './Cookies.js';
import MyEvents from './Events.js';
import ChatCode from './Chat.js';
import '../App.css';

var evts = new EventSource("sds");





class Login extends Component {
  render() {
    return 0;
  }
    

    evts = new MyEvents();  
    initLog(){
    // evts = new MyEvents();   
    }

    static Logging(){
    var name = document.getElementById("LoginUsername").value;
    var pass= document.getElementById("LoginPassword").value;
    Cookies.setCookie("name", name);
    Cookies.setCookie("pass", pass);
      var dat;
      evts = new EventSource(Cookies.getCookie("Ip")+"/sse");
      evts.addEventListener("connected",msg =>{
        Cookies.setCookie("LoginSession", msg.data);
        dat = msg.data;
        var request = new XMLHttpRequest();
      if (name != "" && pass != ""){
          request.open("POST", Cookies.getCookie("Ip") + "/check-user");
          var json = JSON.stringify(name + " " + pass + " " +  dat);
          request.send(json);
      }
      evts.addEventListener("log",msg =>{
          if(msg.data == "cool"){
            Cookies.setCookie("name", name);
            ChatCode.GetName();
            document.location = "/chat";
          }
      
      });
      evts.addEventListener("log",msg =>{
        if(msg.data == "wrong"){
          alert("Неправильное имя пользоватьеля или пароль");
        }
      
      });
        
      });
   
      

  }

  static Connection(){
    //MyEvents.EventSource = new EventSource("host");
    
    var a = "http://" + document.getElementById("Ip").value;
    
    Cookies.setCookie("Ip", a);
    //this.InitSession(a+"/sse");
    evts = new EventSource(a+"/sse");
    evts.addEventListener("connected",msg =>{
      Cookies.setCookie("LoginSession", msg.data);
      document.location = "/login";
    });
    
    }

    static AddAccount(){
      
      var name = document.getElementById("RegUsername").value;
      var pass= document.getElementById("RegPassword").value;
      var passc = document.getElementById("RegPasswordConfirm").value;
      if(pass != passc){
        alert("Пароли не совпадают!");
        return;
      }
      var dat;
      evts = new EventSource(Cookies.getCookie("Ip")+"/sse");
      evts.addEventListener("connected",msg =>{
        Cookies.setCookie("LoginSession", msg.data);
        dat = msg.data;
        var request = new XMLHttpRequest();
      if (name != "" && pass != ""){
          request.open("POST", Cookies.getCookie("Ip") + "/create-user");
          var json = JSON.stringify(name + " " + pass + " " +  dat);
          request.send(json);
      }
      evts.addEventListener("reg",msg =>{
          if(msg.data == "cool"){
            Cookies.setCookie("name", name);
            ChatCode.GetName();
            document.location = "/chat";
          }
      
      });
      evts.addEventListener("reg",msg =>{
        if(msg.data == "taken"){
          alert("Аккаунт с таким именем уже существует");
        }
      
      });
        
      });
      

    }
    
    
    static Disconnect(){
      var ip = Cookies.getCookie("Ip");
      Cookies.deleteAllCookies();
      Cookies.setCookie("Ip", ip);
      document.location = "/login";
    }

    static RegSwitch(){
      document.location = "/Reg";
    }

    static LoginSwitch(){
      document.location = "/login";
    }



}
export default Login;