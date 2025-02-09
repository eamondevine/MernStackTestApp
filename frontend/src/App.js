import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Browser>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Browser>
    </div>
  );
}

export default App;
