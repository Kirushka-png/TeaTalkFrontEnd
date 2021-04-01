import React, {Component} from 'react'

import Login from '../codebase/Code.js'
import ChatCode from "../codebase/Chat.js"
import Animations from "../codebase/Animations.js"
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
                    <div className='headcontent'>
                    <div className='imghere'>
                   <img onClick ={() => {Animations.OpenModal("UserInfo")}} id='picture' className="pic" src='https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3_5.png'>
                   </img>
                   </div>
                   <div className='names'>
                      <div className='username' id="username">Egor</div>
                      <div className='userid' id ='userid'>@egor</div>                  
                   </div>
                   
                  </div>
                  </div>
                  <div className='chats'>
                    <ul className='rooms' id='rooms'>
                      
                    </ul> 
        
                  </div>
                  <div className="RoomFooter" id="RoomFooter">
                    <div className='guyssvg' id="guyssvg">
                      <div className="arrow" id="arrow1">^</div>
                      <img className='addgroupimg' src={Addusersvg} alt="adduser" width="65%" />
                      <div className="arrow" id="arrow2">^</div>
                    </div>
                    <div className="addlist" id="addlist">
                      <div className="addGroup" onClick ={() => {Animations.OpenModal("Group")}}>Add Group</div>
                      <div className="addPM" onClick ={() => {Animations.OpenModal("PM")}}>Add PM</div>
                    </div>
                  </div>
                </div>
                <div className='chatspace'>
                  <div className='chathead' id='chathead'>
                   <button className='more'  onClick= {() =>{Animations.OpenModal("AddUser")}}>Add User</button>
                   <button onClick ={() => {ChatCode.DeleteRoom()}} className='users' > Delete Room</button>
                   <div className='settingsContainer' id='settingsContainer'> 
                      <div className='settings' id='settings'>
                      </div>
                      <div className='settingsList' id='settingsList'>
                        <div className='setting' id='setting1'>Покинуть беседу</div>
                        <div className='setting' id='setting2'>Название беседы</div>
                        <div className='setting' id='setting3'>Добавить собеседника</div>
                        <div className='setting' id='setting4'>Название банера</div>
                        <div className='setting' id='setting5'>Удалить беседу</div>
                      </div>
                    </div> 
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
                  <a onClick ={() => {Animations.CloseModal()}} title="Закрыть" class="closeModalGroup">X</a>
                  <div>Введите название группы:</div>
                  <input type="text" id="groupName"/>
                  <button className='send add' id="CreateGroup" onClick ={() => {ChatCode.AddGroup()}}>Create</button>
               </div>
              </div>
              <div id="openModalPM" className="modalDialogPM">
                <div className="modalBodyPM">
                  <a onClick ={() => {Animations.CloseModal()}} title="Закрыть" class="closeModalPM">X</a>
                  <div>Введите имя пользователя, с которым намереваетесь беседовать:</div>
                  <input type="text" id="usernameToPM"/>
                  <button className='send add' id="CreatePM" onClick ={() => {ChatCode.AddPm()}}>Create</button>
               </div>
              </div>
              <div id="openModalAddUser" className="modalDialogAddUser">
                <div className="modalBodyPM">
                  <a onClick ={() => {Animations.CloseModal()}} title="Закрыть" class="closeModalAddUser">X</a>
                  <div>Введите имя пользователя, которого хотите добавить в беседу:</div>
                  <input type="text" id="usernameToAddUser"/>
                  <button className='send add' id="CreateAddUser" onClick ={() => {ChatCode.AddPm()}}>Add</button>
               </div>
              </div>
              <div id="openModalUserInfo" className="modalDialogUserInfo">
                <div className="modalBodyPM">
                  <a onClick ={() => {Animations.CloseModal()}} title="Закрыть" class="closeModalUserInfo">X</a>
                  <div className='userInfoCont'>
                    <img className="userInfoPicture" src='https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3_5.png'>
                    </img>
                    <div>
                      Egor
                    </div>
                  </div>
                  <input type="text" id="UserInfo1"/>
                  <input type="text" id="UserInfo2"/>
                  <button className='send add' id="SendUserInfo" onClick ={() => {ChatCode.AddPm()}}>Send</button>
               </div>
              </div>
            </body>
            
          )
    }
  
  }
  
  export default Chat;