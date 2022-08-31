import "./styles/main.css";
import "./styles/navigation_bar.css";

import Main from "./pages/Main";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
