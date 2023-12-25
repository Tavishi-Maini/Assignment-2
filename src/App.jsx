import Test from "./Test.jsx"
import "./app.scss"
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
  return <div>
  <section id="Homepage">
    <Navbar/> 
    <Hero/> 
  </section>
  <section><a href="">Hello</a></section> 
  <section>Parallax</section> 
  <section>Services</section> 
  <section>Parallax</section> 
  <section>Portfolio1</section> 
  <section>Portfolio2</section> 
  <section>Portfolio3</section> 
  <section>Contact</section> 
   
  </div>;

};

export default App;
