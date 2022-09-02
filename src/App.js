import "./styles/courses.css";
import "./styles/loadingBar.css";
import "./styles/navigation_bar.css";
import "./styles/header.css";
import "./styles/categories.css";
import "./styles/footer.css";

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
