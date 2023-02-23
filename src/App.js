import "./App.css";
import Home from "./Pages/Home/Home.jsx";
// import Slider from './sample/Slider';
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
