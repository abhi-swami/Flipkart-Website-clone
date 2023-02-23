import "./App.css";
import Home from "./Pages/Home/Home.jsx";
// import Slider from './sample/Slider';
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin/Admin";

import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <MainRoutes />
        <Navbar />
        <Home />
        <Footer />
        <Admin />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
