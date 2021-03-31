import React, {Component} from 'react'

import Login from '../codebase/Code.js'


class LoginMenu extends Component{
    
 

    render(){
     
        return(
      <body>
        <div className='Signup'>
          <button onClick ={() => {Login.RegSwitch()}} >Sign Up</button>
        </div>
        <div className='main'>
            <div className='login'>
              <div className='logincap'>
                Log In
              </div>
              <div className='inputs'>
                <div className='finput'>
                <label className='flbl name' >Username: </label>  
                  <input className='inp ' id="LoginUsername"></input>
                </div>
                <div className='finput'>
                  <label  className='flbl pass'>Password: </label>  
                  <input type='password'className="inp" id="LoginPassword"></input>
                </div>
                <div className='loginbtns'>
                <button onClick ={() => {Login.Logging()}}>{'>'}Sign In</button>
                
                </div>
              </div>
                  
            </div>
        </div>
  
      </body>
        )
    }
  
  }
  
  export default LoginMenu;