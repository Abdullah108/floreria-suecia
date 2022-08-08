import React, { useEffect, useState } from "react";
//styles
import "./Footer.scss";
import TextField from "./../textField/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactComponent as Tiktok } from "./../../assets/tiktok.svg";
import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  const [expanded, setExpanded] = useState(true);

  const [screenwidth, setWidth] = useState(window.innerWidth);
  const [screenheight, setHeight] = useState(window.innerHeight);
  const [expandid, setexpandid] = useState("panel1");
  // `${screenwidth < 451 ? "" : "panel1"}`

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleExpand = (ID) => {
    if (ID === expandid) {
      setexpandid("");
      console.log("hererrere");
      console.log(expandid);
    } else {
      setexpandid(ID);
    }
  };
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
            <Accordion expanded={expandid === "panel1"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1"
                onClick={() => handleExpand("panel1")}
              >
                <h4>Servicio al Cliente {/* {width} */} </h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <a href>Seguimiento de pedido</a>
                  <a href>Cambiar Datos de pedido</a>
                  <a href>Whatsapp</a>
                  <a href>Llámanos</a>
                  <a href>Contacto</a>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="main-elements">
            <Accordion expanded={expandid === "panel2"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2"
                onClick={() => handleExpand("panel2")}
              >
                <h4>Florería Suecia</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <a href>Sobre Nosotras</a>
                  <a href>Nuestra Diferencia</a>
                  <a href>Nuestra Ubicación</a>
                  <a href>Trabaja Con Nosotras</a>
                  <a href>Referidas</a>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="main-elements">
            <Accordion expanded={expandid === "panel3"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel3"
                onClick={() => handleExpand("panel3")}
              >
                <h4>INFORMACION</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <a href>Como Comprar</a>
                  <a href>Preguntas Frecuentas</a>
                  <a href>Reclamos Y Sugerencias</a>
                </div>
              </AccordionDetails>
            </Accordion>
            <div className="main-elements">
              <Accordion expanded={expandid === "panel5"}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel5"
                  onClick={() => handleExpand("panel5")}
                >
                  <h4>MI Cuenta</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <a href>Acceder a mi cuenta</a>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="main-elements">
            <Accordion expanded={expandid === "panel4"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel4"
                onClick={() => handleExpand("panel4")}
              >
                <h4>Ocasión</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <a href>Cumpleaños</a>
                  <a href>Aniversario</a>
                  <a href>Condolencias</a>
                  <a href>Agradecimiento</a>
                  <a href>Porque sí</a>
                </div>
              </AccordionDetails>
            </Accordion>
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
