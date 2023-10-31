// COMPONET'S
import {
  About,
  Area,
  Credential,
  Detail,
  Equipment,
  Error,
  FormView,
  Home,
  Login,
  Procedures,
  State,
  User,
  UserApi,
} from "./Views";
import NavBar from "./Components/NavBar/NavBar";

// HOOK'S
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// STYLESHEET'S
import styles from "./StyleSheets/app.module.css";
library.add(fas, fab, far);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/";
  const is404ErrorPage = location.pathname.startsWith("/404");

  const initialAccess = localStorage.getItem('access') === 'true' || false;
  const [access, setAccess] = useState(initialAccess);
  const selectLogin = useSelector((state) => state.aux);
  const accessRes = selectLogin[0]?.access;

  const changeState = () => {
    localStorage.setItem("access", "false");
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    if (selectLogin.length) {
      if (accessRes === true) {
        localStorage.setItem("access", "true");
        setAccess(true);
        navigate("/home");
      }
    }
  }, [accessRes]);

  return (
    <div className={styles["app-container"]}>
      {!isLoginPage && !is404ErrorPage && <NavBar changeState={changeState} />}
      <div className={styles["content-container"]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormView />} />
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
    </div>
  );
};

export default App;
