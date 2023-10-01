// COMPONET'S
import { Home, Form } from "./Views";
import NavBar from "./Components/NavBar/NavBar";

// HOOK'S
import { Routes, Route, useLocation } from "react-router-dom";

// STYLESHEET'S
import "./StyleSheets/App.css";

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/>
      <Route exact path="" component={}/> */}
    </div>
  );
};

export default App;
