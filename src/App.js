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
import Cart from "./Cart";
import Contact from "./Contact";
import Products from "./Products";
import NotFound from "./NotFound";
import Navigation from "./Navigation";


class App extends React.Component{
  state = {
    products: [
      {id:1, name: "redmi", price:'$500', pic: "https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg" },
      {id:2, name: "realme", price: '$300', pic: "https://image01.realme.net/general/20220322/1647931193820.png" },
      { id: 3, name: "iphone", price: '$1500', pic: "https://itronics.in/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png" },
      { id: 4, name: "hp Spectre x360", price: '$1000', pic: "https://whatithingco.com/wp-content/uploads/2020/07/2020-HP-Spectre-X360-13-Laptop-image-3-copy-1024x768.jpg" },
      { id: 5, name: "Galaxy S22+", price: '$1300', pic: "https://www.cnet.com/a/img/resize/20ddb34526723119296f9c16795a69434718eccd/hub/2022/02/11/7ca46cb8-01a8-471d-940c-416e94fc0671/samsung-s22-plus-hands-on-003.jpg?auto=webp&fit=crop&height=675&width=1200" },
      { id: 6, name: "iPad Pro", price: '$2300', pic: "https://photos5.appleinsider.com/gallery/50648-100945-2022-M2-iPad-Pro-VS-2021-M1-iPad-Pro!-xl.jpg" },
      {id:7, name: "Hero Xpulse", price: '$2000', pic: "https://www.heromotocorp.com/en-in/motorcycles/performance/xpulse-200-4v/_jcr_content/root/container/container/container/productbanner_copy_c.coreimg.png/1663155449282/top-banner-bike.png" },
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
          <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
</BrowserRouter></div>
    )
      
    
  }
}

export default App;