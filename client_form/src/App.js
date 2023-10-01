// COMPONET'S
import { Home, Form } from "./Views";
import NavBar from "./Components/NavBar/NavBar";
import FormHigh from "./Components/Forms/FormHigh/FormHigh";
import FormLow from "./Components/Forms/FormLow/FormLow";
import FormChange from "./Components/Forms/FormChange/FormChange";

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
        <Route path="/form" element={<Form />} />
        <Route path="/alta" element={<FormHigh />} />
        <Route path="baja" element={<FormLow />} />
        <Route path="cambio" element={<FormChange />} />
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
