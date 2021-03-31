import React, {Component} from 'react'

import Login from '../codebase/Code.js'


class Ip extends Component{
    
 

    render(){
      var Lg = new Login();
        return(
            <body>
            <div className='Signup'>
              <button>Log Out</button>
            </div>
            <div className='main'>
                <div className='login'>
                  <div className='logincap'>
                    Enter IP
                  </div>
                  <div className='inputs'>
                  <div className='finput'>
                    <label className='flbl name'>IP: </label>  
                      <input className='inp ' id="Ip"></input>
                    </div>
                    <div className='loginbtns'>
                    <button onClick ={() => {Login.Connection()}}>{'>'}Connect</button>
                    
                    </div>
                  </div>
                      
                </div>
            </div>
      
          </body>
        )
    }
  
  }
  
  export default Ip;