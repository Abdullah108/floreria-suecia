import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const TabsSection = () => {
  // Tab panel State
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickList = () => {
    setOpen(!open);
  };

  // tab Panel Component
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }
  // Props Types for TabPanel
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <div>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            className="productDetailTab"
          >
            <Tab {...a11yProps(0)} label="Descripción del producto" />
            <Tab {...a11yProps(1)} label="Políticas de envío" />
            <Tab {...a11yProps(2)} label="Políticas de Sustitución" />
          </Tabs>
        </div>
        <div style={{ margin: "0 0.3rem" }}>
          <TabPanel value={value} index={0}>
            <div className="tabpaneld1">
              <h4 className="tabpaneld1h1">
                Vino 3V y Botanas con Globo "Love You"
              </h4>
              <p style={{ textAlign: "left", color: "#9BABBF" }}>
                Demuestra tu agradecimiento y cariño con nuestra exclusiva
                canasta Vinum la cual contiene la combinación perfecta de vino y
                botanas que hará de este, el regalo perfecto junto con un globo
                con la frase "Love you". <br />
                <br />
                Nuestra caja titulada Vinum, palabra de origen latin que
                significa Vino, conecta el origen de esta bebida que tiene
                presencia desde antiguas civilizaciones, y se posiciona hasta el
                día de hoy como la bebida por excelencia para celebraciones.
              </p>
              <h5 className="tabpaneld1h2">Especificaciones del Empaque:</h5>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="DetailList"
              >
                <div
                  className="panelP"
                  style={{ display: "flex", width: "700px" }}
                >
                  <div className="tabpaneld2"></div>
                  <p className="tabpanelp1">
                    Caja rígida decorativa o reutilizable tipo libro color hueso
                    y foil color champagne
                  </p>
                </div>
                <div style={{ display: "flex", width: "700px" }}>
                  <div className="tabpaneld3"></div>
                  <p className="tabpanelp2">
                    Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm
                  </p>
                </div>
                <ListItemButton onClick={handleClickList}>
                  <ListItemText
                    style={{ color: "#D96581", textDecoration: "underline" }}
                    primary="Ver Más"
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="tabpaneld1">
              <h4 className="tabpaneld1h1">
                Vino 3V y Botanas con Globo "Love You"
              </h4>
              <p style={{ textAlign: "left", color: "#9BABBF" }}>
                Demuestra tu agradecimiento y cariño con nuestra exclusiva
                canasta Vinum la cual contiene la combinación perfecta de vino y
                botanas que hará de este, el regalo perfecto junto con un globo
                con la frase "Love you". <br />
                <br />
                Nuestra caja titulada Vinum, palabra de origen latin que
                significa Vino, conecta el origen de esta bebida que tiene
                presencia desde antiguas civilizaciones, y se posiciona hasta el
                día de hoy como la bebida por excelencia para celebraciones.
              </p>
              <h5 className="tabpaneld1h2">Especificaciones del Empaque:</h5>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="DetailList"
              >
                <div
                  className="panelP"
                  style={{ display: "flex", width: "700px" }}
                >
                  <div className="tabpaneld2"></div>
                  <p className="tabpanelp1">
                    Caja rígida decorativa o reutilizable tipo libro color hueso
                    y foil color champagne
                  </p>
                </div>
                <div style={{ display: "flex", width: "700px" }}>
                  <div className="tabpaneld3"></div>
                  <p className="tabpanelp2">
                    Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm
                  </p>
                </div>
                <ListItemButton onClick={handleClickList}>
                  <ListItemText
                    style={{ color: "#D96581", textDecoration: "underline" }}
                    primary="Ver Más"
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="tabpaneld1">
              <h4 className="tabpaneld1h1">
                Vino 3V y Botanas con Globo "Love You"
              </h4>
              <p style={{ textAlign: "left", color: "#9BABBF" }}>
                Demuestra tu agradecimiento y cariño con nuestra exclusiva
                canasta Vinum la cual contiene la combinación perfecta de vino y
                botanas que hará de este, el regalo perfecto junto con un globo
                con la frase "Love you". <br />
                <br />
                Nuestra caja titulada Vinum, palabra de origen latin que
                significa Vino, conecta el origen de esta bebida que tiene
                presencia desde antiguas civilizaciones, y se posiciona hasta el
                día de hoy como la bebida por excelencia para celebraciones.
              </p>
              <h5 className="tabpaneld1h2">Especificaciones del Empaque:</h5>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="DetailList"
              >
                <div
                  className="panelP"
                  style={{ display: "flex", width: "700px" }}
                >
                  <div className="tabpaneld2"></div>
                  <p className="tabpanelp1">
                    Caja rígida decorativa o reutilizable tipo libro color hueso
                    y foil color champagne
                  </p>
                </div>
                <div style={{ display: "flex", width: "700px" }}>
                  <div className="tabpaneld3"></div>
                  <p className="tabpanelp2">
                    Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm
                  </p>
                </div>
                <ListItemButton onClick={handleClickList}>
                  <ListItemText
                    style={{ color: "#D96581", textDecoration: "underline" }}
                    primary="Ver Más"
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </TabPanel>
        </div>
      </div>

      <div className="productSlideHeading">
        <h4>Productos Relacionados</h4>
      </div>
    </>
  );
};

export default TabsSection;
