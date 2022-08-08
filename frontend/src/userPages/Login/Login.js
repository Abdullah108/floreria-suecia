import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
//mui
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
//css
import "./Login.scss";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//assets
import background from "./../../assets/background.png";
import logo from "./../../assets/logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
//utils
import { notifySuccess, notifyError } from "../../utils/toast";
//api
import UserServices from "../../services/UserServices";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async () => {
    // UserServices.loginUser({email, password})
    //   .then((res) => {
    //     if (res) {
    //       Cookies.set('adminInfo', JSON.stringify(res));
    //       history.replace('/');
    //     }
    //   })
    try {
      const res = await UserServices.loginUser({ email, password });
      if (res) {
        Cookies.set("userInfo", JSON.stringify(res));
        notifySuccess("Login Successful");
        history.replace("/user/home");
      }
    } catch (error) {
      notifyError("Invalid credentials");
    }
  };

  return (
    <div className="LoginDiv">
      <div className="leftpage">
        <div className="leftpagediv1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "300px",
            }}
          >
            <img
              alt=""
              style={{ width: "100px", height: "100px", alignSelf: "center" }}
              src={logo}
            />
            <p className="leftpagep1">Florería Suecia</p>
          </div>
          <div
            style={{
              minWidth: "300px",
            }}
          >
            <p className="leftpagep2">Ingresa a tu cuenta</p>
            <p className="leftpagep3">Ingresa tus datos</p>
          </div>
          <form>
            <label for="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Ingresa tu Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <label for="email">Contraseña</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <a href className="leftpagea1">
            Olvidé mi contraseña
          </a>
          <div
            className="logdivl"
            style={{ display: "flex", width: "400px" }}
            onClick={handleLoginSubmit}
          >
            {/* <Link to="home">v  */}
            <Button className="leftpageb2 logbtn">Ingresar</Button>
            {/* </Link> */}
          </div>
          <Button className="leftpageb1">
            <GoogleIcon className="googleicon" sx={{ color: pink[300] }} />
            <p>Ingresar con Google</p>
          </Button>

          <div className="leftpagegp">
            <p className="leftpagep4">¿Aún no tienes cuenta?</p>
            <p className="leftpagep5">Regístrate gratis</p>
          </div>
        </div>
      </div>
      <div className="rightpage">
        <img alt="" src={background} />
      </div>
    </div>
  );
};

export default Login;
