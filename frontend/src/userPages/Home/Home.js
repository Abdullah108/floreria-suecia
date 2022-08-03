import React, { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';

//styles
import "./Home.scss";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import 'react-dropdown/style.css'; //react-dropdown
//mui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//assets
import calender from "./../../assets/calender.svg";
import dividedflowers from "./../../assets/dividedflowers.png";
import whatsapp_fix from "./../../assets/whatsapp_fix.png";
//components
import ProductSection from "../../mainLayout/ProductSection/ProductSection";
import Hero from "../../mainLayout/Hero/Hero";
import Service from "../../mainLayout/Service/Service";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = () => {

  
  const options = [
    'Love', 'Birthday', 'Friendship', 'Condolences'
  ];
  const defaultOption = options[0]
  
  return (
    <div style={{ overflow: "hidden" }}>
      
      
      <div className="landingContainer">
        <Hero />
        <div className="emptyDiv">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 0 }}
            className="modalContainer"
          >
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Typography className="modalCP1" variant="h6">
                BUSCA TU REGALO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <p style={{ color: "#C8CED4" }}>¿Donde envías?</p>

              <input
                style={{ borderRadius: "10px", width: "100%" }}
                className="modalCI1 form-control"
                type="email"
                id="email1"
                placeholder="Comuna"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <p style={{ color: "#C8CED4" }}>Ocasión</p>
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <p style={{ color: "#C8CED4" }}>¿Cuando debe llegar?</p>

              <button className="modalCb1" style={{width:'100%'}}>
                Lunas, 21 feb
                <img alt="" style={{ width: "20px" }} src={calender} />
              </button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <p style={{ color: "#C8CED4", visibility: "hidden" }}>HIDDEN</p>

              <Button className="modalCb2" variant="contained" style={{width:'90%'}}>
                Encontrar Egalo
              </Button>
            </Grid>
          </Grid>
        </div>
        <img alt="" className="whatsapp" src={whatsapp_fix} />
      </div>

      <div className="beta">
        <ProductSection />
      </div>

      <div className="alpha">
        <Service />
      </div>
      <div className="lastDiv">
        <h1>Nosotras</h1>
        <div style={{ width: "80%" }}>
          <p>
            En Florería Suecia estamos orgullosos de entregar la experiencia de
            enviar flores en línea, recordando a las personas lo especial que es
            enviar y recibir flores.
          </p>
          <p>
            Nuestro objetivo es combinar un servicio de entrega de flores
            hermoso, flexible y fácil de usar con la magia que solo nuestras
            excelentes floristas pueden brindar a nuestros bellos ramos y
            arreglos.
          </p>
          <p>
            Seleccionamos cuidadosamente cada flor con las que trabajamos para
            asegurarnos de mantener una altísima calidad y ofrecer una increíble
            experiencia en las flores o regalos que envíes a tus seres queridos.
          </p>
        </div>
        <img alt="" style={{ marginTop: "50px" }} src={dividedflowers} />
      </div>
    </div>
  );
};

export default Home;
