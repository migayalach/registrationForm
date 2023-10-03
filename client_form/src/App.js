// COMPONET'S
import {
  About,
  Area,
  Credential,
  Detail,
  Equipment,
  Error,
  Form,
  FormChange,
  FormEquipment,
  FormHigh,
  FormLow,
  FormProcedures,
  FormState,
  FormUser,
  Home,
  Login,
  Procedures,
  State,
  User,
  UserApi,
} from "./Views";
import NavBar from "./Components/NavBar/NavBar";

// HOOK'S
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// STYLESHEET'S
import "./StyleSheets/App.css";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const is404ErrorPage = location.pathname.startsWith("/404");

  return (
    <div className="App">
      {!isLoginPage && !is404ErrorPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/high" element={<FormHigh />} />
        <Route path="/low" element={<FormLow />} />
        <Route path="/change" element={<FormChange />} />
        <Route path="/about-Me" element={<About />} />
        <Route path="/area" element={<Area />} />
        <Route path="/credential" element={<Credential />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/state" element={<State />} />
        <Route path="/user" element={<User />} />
        <Route path="/userApi" element={<UserApi />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
};

export default App;
