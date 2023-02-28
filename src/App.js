import "./App.css";

// import Slider from './sample/Slider';
import NewFooter from "./Components/NewFooter";

import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import { useUserAuth } from "./Context/UserAuthContext";

function App() {
  const { user } = useUserAuth();

  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      {user?.email !== "admin@clickcart.in" ? <NewFooter /> : null}
      {/* <NewFooter /> */}
    </div>
  );
}

export default App;
