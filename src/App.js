import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginMenu from './pages/Login.jsx'
import Ip from './pages/ip.jsx'
import Registration from './pages/Registration.jsx';
import Chat from './pages/chat.jsx';
import './css/chat.css';
import './App.css';

function Logging(){
  
  

  
}

function App() {
  return(
  <BrowserRouter>
      <Route path="/login" component={LoginMenu} />
      <Route path="/Ip" component={Ip} />
      <Route path="/Reg" component={Registration}/>
      <Route path="/Chat" component={Chat}/>
    </BrowserRouter>
  )
  

}
export default App;
