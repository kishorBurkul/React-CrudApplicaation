import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes ,} from 'react-router-dom';
import About from './Components/Pages/About';
import View from './Components/Pages/View';
import AddEdit from './Components/Pages/AddEdit';
import Home from './Components/Pages/Home';
import Header from './Components/Pages/Header';
import firebase from './firebase';


function App() {
  return (
<BrowserRouter>

 
    <div className="App">
      <Header/>
    <Routes>
  <Route exact path='/' Component={Home}></Route>
  <Route path='/about' Component={About}></Route>
  <Route path='/view/:id' Component={View}></Route>
  <Route path='/add' Component={AddEdit}></Route>
  <Route path='/update/:id' Component={AddEdit}></Route>
  </Routes>
    </div>

   
    </BrowserRouter>
  );
}

export default App;
