import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills";
import "./App.css";

const App = () =>{
  return <div>
    <Intro/>
    <About/>
    <Skills/>
    <ProductList/>
    <Contact/>
    
    </div>;
};


export default App;