/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*function App() {
  return (
    <div>
    <h1>Hello  Good Morning</h1>
      <p> demo of the app</p>
      </div>
  )
}
export default App

import React from 'react' 
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>Example of class Component</h1>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"  ></img>
        </div>
      )
    }
}
export default App

import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./functionalComponent";
import Events from "./Event";
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Navigation from "./Navigation";
import React from "react";


function App() {
  return (
    <div>

      
      <ClassComponent demo="ram" />
      <ClassComponent />
      <FunctionalComponent demo="siva" />
      <FunctionalComponent demo="teja" />
      <h1> React</h1>
  <Events/>
      

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
  </BrowserRouter>

    </div>
  );
}
export default App;*/




import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./functionalComponent";
import Events from "./Event";
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import NotFound from "./NotFound";
import Navigation from "./Navigation";


class App extends React.Component{
  state = {
    products: [
      {id:1, name: "redmi", price: 12, pic: "https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg" },
      {id:2, name: "realme", price: 12, pic: "https://image01.realme.net/general/20220322/1647931193820.png" },
      {id:3, name:"iphone",price:12,pic:"https://itronics.in/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png"}
    ]
  }
  render() {
    return (
      <div>   <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products products={this.state.products} />} />
          
        <Route path="*" element={<NotFound/>} />
    </Routes>
</BrowserRouter></div>
    )
      
    
  }
}

export default App;