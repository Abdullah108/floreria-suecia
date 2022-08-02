import React, { useState } from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

//mui
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { pink } from "@mui/material/colors";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//assets
import g_icon from "./../../assets/g_icon.svg";
import background from "./../../assets/background.png";
import logo from "./../../assets/logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
//utils
import { notifySuccess, notifyError } from "../../utils/toast";
//api
import UserServices from "../../services/UserServices";

const SignUp = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [role, setRole] = useState("1");
  const handleRole = (event) => {
    setRole(event.target.value);
  };

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
          <img
            style={{ width: "100px", height: "100px", alignSelf: "center" }}
            src={logo}
          />
          <p className="leftpagep1">Florería Suecia</p>
          <p className="leftpagep2">Ingresa a tu cuenta</p>
          <p className="leftpagep3">Ingresa tus datos</p>
          <form>
            <br />

            <label htmlFor="name">Nombre</label>
            <br />
            <input
              type="text"
              id="text"
              name="text"
              value={name}
              placeholder="Ingresa tu nombre"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
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

            <label htmlFor="email">Contraseña</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="confpassword">Confirmar contraseña</label>
            <br />
            <input
              type="password"
              id="confpassword"
              name="confpassword"
              value={confpassword}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <br />
            <br />
            <label for="cars">Role</label>
            <br />
            <Select
              className="role"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Age"
              onChange={handleRole}
            >
              <MenuItem value={1}>User</MenuItem>
              <MenuItem value={2}>Admin</MenuItem>
            </Select>
          </form>
          <a className="leftpagea1">Olvidé mi contraseña</a>
          <div onClick={handleLoginSubmit}>
            {/* <Link to="home">v  */}
            <Button className="leftpageb2">Ingresar</Button>
            {/* </Link> */}
          </div>
          <Button className="leftpageb1" style={{marginTop:'20px'}}>
            <GoogleIcon className="googleicon" sx={{ color: pink[300] }} />
            <p>Ingresar con Google</p>
          </Button>

          <div style={{ display: "flex", alignSelf: "center" }}>
            <p className="leftpagep4">¿Aún no tienes cuenta?</p>
            <p className="leftpagep5">Regístrate gratis</p>
          </div>
        </div>
      </div>
      <div className="rightpage">
        <img src={background} />
      </div>
    </div>
  );
};

export default SignUp;
