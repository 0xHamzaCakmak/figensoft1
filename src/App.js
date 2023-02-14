import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
