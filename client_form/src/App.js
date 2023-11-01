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
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

//REDUX
import { logout } from "./Redux/actions";

// STYLESHEET'S
import styles from "./StyleSheets/app.module.css";
library.add(fas, fab, far);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoginPage = location.pathname === "/";
  const is404ErrorPage = location.pathname.startsWith("/404");

  const [access, setAccess] = useState(false);
  const selectLogin = useSelector((state) => state.auxUser);
  const accessRes = selectLogin[0]?.access;

  const changeState = (flag) => {
    flag === "logout" && dispatch(logout());
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    if (selectLogin.length) {
      if (accessRes === true) {
        setAccess(true);
        navigate("/home");
      }
    }
  }, [accessRes]);

  useEffect(() => {
    if (!access && !isLoginPage) {
      dispatch(logout());
      navigate("/");
      if (!access && !isLoginPage) {
        alert("Adios");
        dispatch(logout());
        navigate("/");
      }
    }
  }, [access, isLoginPage]);

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
