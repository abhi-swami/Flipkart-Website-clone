import "./App.css";
import Home from "./Pages/Home/Home.jsx";
// import Slider from './sample/Slider';
import Footer from "./Components/Footer";
import Admin from './Pages/Admin/Admin'


import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <Admin/>
   
    </div>
  );

}

export default App;
