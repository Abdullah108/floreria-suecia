import React from "react";
//styles
import "./Footer.scss";
import TextField from "./../textField/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactComponent as Tiktok } from "./../../assets/tiktok.svg";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div id="upperFooter">
        <div className="mailingList">
          <h2>Suscríbete a nuestro newsletter</h2>
          <TextField>Suscribirme</TextField>
          <div className="socialMedia">
            <IconButton aria-label="Facebook Handle">
              <FacebookIcon
                style={{ color: "#FFFFFF" }}
                sx={{ fontSize: 40 }}
              />
            </IconButton>
            <IconButton aria-label="Insatgram handle">
              <InstagramIcon
                style={{ color: "#FFFFFF" }}
                sx={{ fontSize: 40 }}
              />
            </IconButton>
            <IconButton aria-label="Tiktok Handle">
              <Tiktok />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <div className="linksSection">
          <div className="main-elements">
            <h4>Servicio al Cliente:</h4>
            <div>
              <a href>Seguimiento de pedido</a>
              <a href>Cambiar Datos de pedido</a>
              <a href>Whatsapp</a>
              <a href>Llámanos</a>
              <a href>Contacto</a>
            </div>
          </div>
          <div className="main-elements">
            <h4>Florería Suecia</h4>
            <div>
              <a href>Sobre Nosotras</a>
              <a href>Nuestra Diferencia</a>
              <a href>Nuestra Ubicación</a>
              <a href>Trabaja Con Nosotras</a>
              <a href>Referidas</a>
            </div>
          </div>
          <div className="main-elements">
            <h4>INFORMACION</h4>
            <div>
              <a href>Como Comprar</a>
              <a href>Preguntas Frecuentas</a>
              <a href>Reclamos Y Sugerencias</a>
            </div>
          </div>
          <div className="main-elements">
            <div>
              <h4>Ocasión:</h4>
              <div>
                <div>
                  <a href>Cumpleaños</a>
                  <a href>Aniversario</a>
                  <a href>Condolencias</a>
                  <a href>Agradecimiento</a>
                  <a href>Porque sí</a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <h4>Mi Cuenta</h4>
              <a href>Acceder A Mi Cuenta</a>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <a href>TERMINOS Y CONDICIONES</a>
          <a href>POLITICA DE PRIVACIDAD</a>
          <a href>POLITICA ENVIOS</a>
          <a href>POLITICA DE REEMBOLSOS</a>
        </div>
        <p style={{ color: "#ffffff", paddingTop: "25px" }}>
          FLORERIA SUECIA 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
