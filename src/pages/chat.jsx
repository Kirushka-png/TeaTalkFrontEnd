import React, {Component} from 'react'

import Login from '../codebase/Code.js'
import ChatCode from "../codebase/Chat.js"

function logKey(e){
  
  if(e.code == "Enter"){
    switch(ChatCode.ModalStatus) {
      case 1:  
        ChatCode.AddGroup();
        break;
      case 2:
        ChatCode.AddPm();
        break;
      default:
        ChatCode.SendMSG();
        break;
    }
  }

}
function CloseModal(){
  ChatCode.ModalStatus = 0;
  document.location= "#close"
}
function OpenModal(adrs){
  if(adrs =="PM"){
    ChatCode.ModalStatus = 2
  }
  if(adrs =="Group"){
    ChatCode.ModalStatus = 1
  }
  document.location= "#openModal" + adrs;
}
class Chat extends Component{
    
 

    render(){
      document.addEventListener('keypress', logKey);
        return(
            <body>
              <div className='Signup'>
                <button onClick ={() => {Login.Disconnect()}}>Log Out</button>
              </div>
              <div className='chatmain'>
                <div className='roomspace'>
                  <div className='roomhead'>
                  <button className='send add' onClick ={() => {OpenModal("Group")}}>Add Group</button>
                  <button className='send add'  onClick ={() => {OpenModal("PM")}}>Add PM</button>
                  </div>
                  <div className='chats'>
                    <ul className='rooms' id='rooms'>
                      
                    </ul> 
        
                  </div>
                  <div className="RoomFooter">

                  </div>
                </div>
                <div className='chatspace'>
                  <div className='chathead'>
                   <button className='more'  onClick ={() => {ChatCode.AddNewUserInRoom()}}>Add User</button>
                   <button onClick ={() => {ChatCode.DeleteRoom()}} className='users'> Delete Room</button>
                   <button onClick ={() => {ChatCode.RemoveUser()}} className='users'>
                   Leave Room
                     </button> 
                  </div>
                  <ul className='chatitself' id="chat">
        
                  </ul>
                  <div className='inputrelated'>
                    <button className='att'>+</button>
                    <input className='msg'autocomplete="off" id="message" placeholder='Your message...'></input>
                    <button className='send' name="Send" onClick ={() => {ChatCode.SendMSG()}}>{'>'}</button>
        
                  </div>
        
        
                </div>

                <div className='userspace'>
                  <div className='banner'></div>
                  <div className='userlist'></div>
                  <div className='userfooter'></div>

                </div>
        
        
              </div>
              <div id="openModalGroup" className="modalDialogGroup">
                <div className="modalBodyGroup">
                  <a onClick ={() => {CloseModal()}} title="Закрыть" class="closeModalGroup">X</a>
                  <div>Введите название группы:</div>
                  <input type="text" id="groupName"/>
                  <button className='send add' id="CreateGroup" onClick ={() => {ChatCode.AddGroup()}}>Create</button>
               </div>
              </div>
              <div id="openModalPM" className="modalDialogPM">
                <div className="modalBodyPM">
                  <a onClick ={() => {CloseModal()}} title="Закрыть" class="closeModalPM">X</a>
                  <div>Введите имя пользователя, с которым намереваетесь беседовать:</div>
                  <input type="text" id="usernameToPM"/>
                  <button className='send add' id="CreatePM" onClick ={() => {ChatCode.AddPm()}}>Create</button>
               </div>
              </div>
            </body>
            
          )
    }
  
  }
  
  export default Chat;