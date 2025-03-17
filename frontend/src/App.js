import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
// pages and components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Browser>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Browser>
    </div>
  );
}

export default App;
