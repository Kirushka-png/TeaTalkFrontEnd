import React, {Component} from 'react'

import Login from '../codebase/Code.js'


class Registration extends Component{
    
 

    render(){
      
      return(
        <body>
              <div className='Signup'>
                <button onClick ={() => {Login.LoginSwitch()}}>Log In</button>
              </div>
              <div className='main'>
                  <div className='login'>
                    <div className='logincap'>
                      Sign Up
                    </div>
                    <div className='inputs'>
                    <div className='finput'>
                      <label className='flbl name' >Username: </label>  
                        <input className='inp ' id="RegUsername"></input>
                      </div>
                      <div className='finput'>
                        <label  className='flbl pass'>Password: </label>  
                        <input type='password'className="inp" id="RegPassword"></input>
                      </div>
                      <div className='finput'>
                        <label  className='flbl conf'>Confirm: </label>  
                        <input type='password'className="inp" id="RegPasswordConfirm"></input>
                      </div>
                      <div className='loginbtns'>
                      <button onClick ={() => {Login.AddAccount(false)}}>{'>'}Register</button>
                      
                      </div>
                    </div>
                        
                  </div>
              </div>
        
            </body>
        
        );
    }
  
  }
  
  export default Registration;