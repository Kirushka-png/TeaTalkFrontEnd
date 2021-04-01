import React, {Component} from 'react'

import Login from '../codebase/Code.js'
import ChatCode from "../codebase/Chat.js"
import Addusersvg from "../svgs/adduser.svg";

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
                    <div className='imghere'>
                   <img id='picture' className="pic" src='https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3_5.png'>
                   </img>
                   </div>
                   <div className='names'>
                      <div className='username' id="username">Egor</div>
                      <div className='userid' id ='userid'>@egor</div>                  
                   </div>
                   
                  </div>
                  <div className='chats'>
                    <ul className='rooms' id='rooms'>
                      
                    </ul> 
        
                  </div>
                  <div className="RoomFooter">
                  
                    <img src={Addusersvg} alt="adduser" width="70%" />
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
                  <div className='userlist'>
                      <ul className="dudes" id="dudesid">


                      </ul>

                  </div>
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