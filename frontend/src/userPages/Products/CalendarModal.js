import React from "react";

//mui
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";

//assets
import cross from "./../../assets/cross.svg";

const CalendarModal = ({
  setopenMod,
  openmod,
  setTime,
  timetext,
  setcaldateBool,
  setcalValue,
  calvalue,
  calMonth,
  calDate,
  setConfirm,
  firstTime,
}) => {
  const handleClear = () => {
    setopenMod(false);
    setTime("");
    setcaldateBool(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #D96581",
    boxShadow: 24,
    p: 4,
    width: "85%",
    height: "85%",
    background: " #FFFFFF",
    borderRadius: "30px",
  };
  const Results = () => (
    <div className="superdiv">
      <div
        className={`firstDiv ${
          timetext.slice(0, 7) === "08:00am"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        08:00am - 02:00pm
      </div>
      <div
        className={`secondDiv ${
          timetext.slice(0, 7) === "10:00am"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        10:00am - 04:00pm
      </div>
      <div
        className={`thirdDiv ${
          timetext.slice(0, 7) === "03:00am"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        03:00am - 08:00pm
      </div>
    </div>
  );
  const Results2 = () => (
    <div style={{ marginBottom: "15px" }} className="superdiv">
      <div
        className={`fourthDiv ${
          timetext.slice(0, 7) === "12:00pm"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        12:00pm - 01:00pm
      </div>
      <div
        className={`fifthDiv ${
          timetext.slice(0, 7) === "01:00pm"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        01:00pm - 02:00pm
      </div>
      <div
        className={`sixthDiv ${
          timetext.slice(0, 7) === "02:00pm"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        02:00pm - 03:00pm
      </div>
      <div
        className={`seventhDiv ${
          timetext.slice(0, 7) === "03:00pm"
            ? "timingselectModal"
            : "timingnormal"
        }`}
        onClick={firstTime}
      >
        03:00pm - 04:00pm
      </div>
    </div>
  );

  //taking weekday name in spanish
  let weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ][new Date().getDay() + 2];

  return (
    <>
      <Modal
        open={openmod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="calBox" sx={style}>
          <img className="Cardspic1" onClick={handleClear} src={cross} />
          <div className="both">
            <div
              style={{
                width: "65%",
              }}
              className="leftSide"
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  orientation="landscape"
                  openTo="day"
                  value={calvalue}
                  onChange={(options) => {
                    setcalValue(options);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <div className="Cardsline1"></div>
              <div className="timediv">
                <div style={{ width: "100%" }}>
                  <p className="Cardsp2">Selecciona el horario de entrega</p>
                  <p className="Cardsp3">
                    Se hara un cargo de envío por $4.990
                  </p>
                  <div className="result">
                    <Results />
                  </div>
                  <div className="Cardsline2"></div>
                  <p className="Cardsp4">Horario especial</p>
                  <p className="Cardsp5">
                    Se hara un cargo adicional de envío por $3.990
                  </p>
                  <div className="result">
                    <Results2 />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div style={{ height: "100%" }} className="time">
                <p
                  className="Cardsp6"
                  style={{
                    display: `${timetext[2] === "" ? "none" : "block"}`,
                  }}
                >
                  Sin tiempo seleccionado
                </p>
                <div
                  className="Cardsd2"
                  style={{
                    display: `${timetext[2] === ":" ? "flex" : "none"}`,
                  }}
                >
                  <div>
                    <p className="Cardsp7">Su pedido se entregará el día</p>
                    <div className="Cardsd3">
                      <p className="Cardsp8">
                        {weekday} {calDate}
                      </p>
                      <p className="Cardsp9">
                        {calMonth}
                        {new Date().getFullYear()}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="Cardsp10">En el horario :</p>
                    <div className="Cardsd4">{timetext}</div>
                  </div>

                  <button
                    className="confirmbtn"
                    style={{
                      display: `${timetext[2] === ":" ? "block" : "none"}`,
                    }}
                    onClick={setConfirm}
                  >
                    Confirmar
                  </button>
                  <p className="Cardsp11">
                    Todos nuestros precios están en CLP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CalendarModal;
