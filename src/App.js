
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Routing/Home'
import About from './Components/Routing/About'
import Notfound from './Components/Routing/Notfound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/Home' element = {<Home/>}/>
        <Route path = '/About' element = {<About/>}/>
        <Route path = '*' element = {<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
