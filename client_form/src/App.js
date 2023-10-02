// COMPONET'S
import {
  About,
  Area,
  Credential,
  Equipment,
  Form,
  FormHigh,
  FormLow,
  FormChange,
  Home,
  Login,
  Procedures,
  State,
  User,
} from "./Views";
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
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/alta" element={<FormHigh />} />
        <Route path="baja" element={<FormLow />} />
        <Route path="cambio" element={<FormChange />} />
        <Route path="about-Me" element={<About />} />
        <Route path="/area" element={<Area />} />
        <Route path="/credential" element={<Credential />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/state" element={<State />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
