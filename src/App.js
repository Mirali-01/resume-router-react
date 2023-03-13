import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Resume from "./pages/Resume";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/content:symbol" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
