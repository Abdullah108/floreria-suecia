import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Thumbs } from "swiper";
//component
import ProductSection from "../../mainLayout/ProductSection/ProductSection";
import TabsSection from "./Tabs";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "./Products.scss";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { selectableProductImages } from "./../../assets/selectableProductImages/index";
import Carousel from "react-elastic-carousel";

import b_arrow from "./../../assets/breadcrumb_arrow.png";
import cal from "./../../assets/cal.png";
import cross from "./../../assets/cross.svg";
//mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//api
import useAsync from "../../hooks/useAsync";
import ProductServices from "../../services/ProductServices";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setProductsDetails, setTotalPrice } from "../Redux/Reducer";
//utils
import { notifySuccess, notifyError } from "../../utils/toast";
//get productID from url
const url = window.location.href;
var productId = url.substring(url.lastIndexOf("/") + 1);

const Products = () => {
  //get productID from url
  const url = window.location.href;
  var productId = url.substring(url.lastIndexOf("/") + 1);

  const { data, loading } = useAsync(() =>
    ProductServices.getProductById(productId)
  );

  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [tempArr, setTempArr] = useState(store.orders.productsDetails);

  console.log("product by id", data);

  const [activeThumb, setactiveThumb] = useState();

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 410, itemsToShow: 2, itemsToScroll: 1 },
    { width: 630, itemsToShow: 3, itemsToScroll: 1 },
  ];

  const breadcrumbs2 = [
    <a style={{ color: "#9BABBF" }} key="1">
      Estado de México
    </a>,
    <img style={{ width: "10px" }} src={b_arrow} />,
    <a style={{ color: "#9BABBF" }} key="2">
      Atizapan de Zaragoza
    </a>,
    <img style={{ width: "10px" }} src={b_arrow} />,
    <a style={{ color: "#D96581", fontWeight: "600" }} key="3">
      Vino 3V con Botanas
    </a>,

    // <a key="3" style={{ color: "#72509D", fontWeight: "bold" }}>
    //   Vino 3V con Botanas
    // </a>,
  ];
  const [optional, setOptional] = useState("");

  const [active1, setActive1] = useState(false);
  const handleActive1 = () => {
    setActive1(!active1);
    setActive2(false);
    setActive3(false);
    setOptional("GRAND");
  };
  const [active2, setActive2] = useState(false);
  const handleActive2 = () => {
    setActive2(!active2);
    setActive1(false);
    setActive3(false);
    setOptional("DELUXE");
  };
  const [active3, setActive3] = useState(false);
  const handleActive3 = () => {
    setActive3(!active3);
    setActive1(false);
    setActive2(false);
    setOptional("ORIGINAL");
  };
  var months = [
    "Enero ",
    "Febrero ",
    "Marzo ",
    "Abril ",
    "Mayo ",
    "Junio ",
    "Julio ",
    "Agosto ",
    "Septiembre ",
    "Octubre ",
    "Noviembre ",
    "Diciembre ",
  ];

  let newDate = new Date();

  let date = newDate.getDate().toString();
  let nextdate = newDate.getDate() + 1;

  let nextdatestrng = newDate.getDate().toString();

  let month = months[newDate.getMonth()];
  let year = newDate.getFullYear().toString();
  var monthNumber = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
  ];
  let cmonth = monthNumber[newDate.getMonth() + 1];
  const [column, setColumn] = useState("");

  const [showResults1, setShowResults1] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const onClick1 = () => {
    setShowResults1(!showResults1);
    setShowResults2(false);
    setcaldateBool(false);
    setColumn("1/2");
    // nextdatestrng = newDate.getDate().toString();
  };

  const onClick2 = () => {
    setShowResults2(!showResults2);
    setShowResults1(false);
    setcaldateBool(false);
    setColumn("2/3");
    // nextdatestrng = (newDate.getDate() + 1).toString();
  };
  const [time, setTime] = useState("");

  const [timebool, settimeBool] = useState(false);
  const [firsttiming, setfirstTiming] = useState(false);
  const [secondtiming, setsecondTiming] = useState(false);
  const [thirdtiming, setthirdTiming] = useState(false);
  const [fourthtiming, setfourthTiming] = useState(false);
  const [fifthtiming, setfifthTiming] = useState(false);
  const [sixthtiming, setsixthTiming] = useState(false);
  const [seventhtiming, setseventhTiming] = useState(false);

  const firstTime = () => {
    setfirstTiming(!firsttiming);
    setsecondTiming(false);
    setthirdTiming(false);
    setfourthTiming(false);
    setfifthTiming(false);
    setsixthTiming(false);
    setseventhTiming(false);
    if (firsttiming) {
      setTime("");
      settimeBool(false);

      settimeDisplay(false);
    } else {
      setTime("08:00am - 02:00pm");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };

  const secondTime = () => {
    setsecondTiming(!secondtiming);
    setfirstTiming(false);
    setthirdTiming(false);
    setfourthTiming(false);
    setfifthTiming(false);
    setsixthTiming(false);
    setseventhTiming(false);
    if (secondtiming) {
      setTime("");
      settimeBool(false);
      settimeDisplay(false);
    } else {
      setTime("10:00am - 04:00pm");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };
  const thirdTime = () => {
    setthirdTiming(!thirdtiming);
    setsecondTiming(false);
    setfirstTiming(false);
    setfourthTiming(false);
    setfifthTiming(false);
    setsixthTiming(false);
    setseventhTiming(false);
    if (thirdtiming) {
      setTime("");
      settimeBool(false);
      settimeDisplay(false);
    } else {
      setTime("03:00am - 08:00pm");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };
  const fourthTime = () => {
    setfourthTiming(!fourthtiming);
    setsecondTiming(false);
    setfirstTiming(false);
    setthirdTiming(false);
    setfifthTiming(false);
    setsixthTiming(false);
    setseventhTiming(false);

    if (fourthtiming) {
      setTime("");
      settimeBool(false);
      settimeDisplay(false);
    } else {
      setTime("12:00 PM - 01:00 PM");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };
  const fifthTime = () => {
    setfifthTiming(!fifthtiming);
    setsecondTiming(false);
    setfirstTiming(false);
    setthirdTiming(false);
    setfourthTiming(false);
    setsixthTiming(false);
    setseventhTiming(false);
    if (fifthtiming) {
      setTime("");
      settimeBool(false);
      settimeDisplay(false);
    } else {
      setTime("01:00 PM - 02:00 PM");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };
  const sixthTime = () => {
    setsixthTiming(!sixthtiming);
    setsecondTiming(false);
    setfirstTiming(false);
    setthirdTiming(false);
    setfourthTiming(false);
    setfifthTiming(false);
    setseventhTiming(false);
    if (sixthtiming) {
      setTime("");
      settimeBool(false);
      settimeDisplay(false);
    } else {
      setTime("02:00 PM - 03:00 PM");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };
  const seventhTime = () => {
    setseventhTiming(!seventhtiming);
    setsecondTiming(false);
    setfirstTiming(false);
    setthirdTiming(false);
    setfourthTiming(false);
    setfifthTiming(false);
    setsixthTiming(false);
    if (seventhtiming) {
      setTime("");
      settimeBool(false);
      settimeDisplay(false);
    } else {
      setTime("03:00 PM - 04:00 PM");
      setcaldateBool(false);
      settimeBool(true);
      settimeDisplay(true);
    }
  };
  const Results = () => (
    <div style={{ marginBottom: "15px" }} className="superdiv">
      <div
        className={`firstDiv ${firsttiming ? "timingselect" : "timingnormal"}`}
        onClick={firstTime}
      >
        08:00am - 02:00pm
      </div>
      <div
        className={`secondDiv ${
          secondtiming ? "timingselect" : "timingnormal"
        }`}
        onClick={secondTime}
      >
        10:00am - 04:00pm
      </div>
      <div
        className={`thirdDiv ${thirdtiming ? "timingselect" : "timingnormal"}`}
        onClick={thirdTime}
      >
        03:00am - 08:00pm
      </div>
    </div>
  );
  const Results2 = () => (
    <div style={{ marginBottom: "15px" }} className="superdiv">
      <div
        className={`fourthDiv ${
          fourthtiming ? "timingselect" : "timingnormal"
        }`}
        style={{ width: "160px", height: "50px" }}
        onClick={fourthTime}
      >
        12:00 PM - 01:00 PM
      </div>
      <div
        className={`fifthDiv ${fifthtiming ? "timingselect" : "timingnormal"}`}
        style={{ width: "160px", height: "50px" }}
        onClick={fifthTime}
      >
        01:00 PM - 02:00 PM
      </div>
      <div
        className={`sixthDiv ${sixthtiming ? "timingselect" : "timingnormal"}`}
        style={{ width: "160px", height: "50px" }}
        onClick={sixthTime}
      >
        02:00 PM - 03:00 PM
      </div>
      <div
        className={`seventhDiv ${
          seventhtiming ? "timingselect" : "timingnormal"
        }`}
        style={{ width: "160px", height: "50px" }}
        onClick={seventhTime}
      >
        03:00 PM - 04:00 PM
      </div>
    </div>
  );

  const [timedisplay, settimeDisplay] = useState(false);

  const [openmod, setopenMod] = useState(false);
  const handleOpen = () => setopenMod(true);
  //const handleClose = () => setopenMod(false);
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
    height: "95%",
    background: " #FFFFFF",
    borderRadius: "30px",
  };

  const [caldatebool, setcaldateBool] = useState();
  const [calvalue, setcalValue] = useState(new Date());

  let calDate = calvalue.getDate(); //taking date and month from calender values
  let calMonth = months[calvalue.getMonth()];

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

  const setConfirm = () => {
    setopenMod(false);
    setcaldateBool(true);
    setShowResults1(false);
    setShowResults2(false);
  };

  //redux
  const assignProductDetails = async () => {
    var productAttributes = {};
    productAttributes.productId = data._id;
    productAttributes.price = data.variantPrice;
    productAttributes.productName = data.productName;
    productAttributes.category = data.category;
    productAttributes.images = data.images;

    if (caldatebool) {
      productAttributes.date = calDate;
      productAttributes.month = calMonth;
    }
    if (
      showResults1 &&
      firsttiming |
        secondtiming |
        thirdtiming |
        fourthtiming |
        fifthtiming |
        sixthtiming |
        seventhtiming
    ) {
      productAttributes.date = date;
      productAttributes.month = month;
    }
    if (
      showResults2 &&
      firsttiming |
        secondtiming |
        thirdtiming |
        fourthtiming |
        fifthtiming |
        sixthtiming |
        seventhtiming
    ) {
      productAttributes.date = nextdate;
      productAttributes.month = month;
    }
    if (
      firsttiming |
      secondtiming |
      thirdtiming |
      fourthtiming |
      fifthtiming |
      sixthtiming |
      seventhtiming
    ) {
      productAttributes.time = time;
    }
    console.log(tempArr);
    await dispatch(setProductsDetails(productAttributes));
    console.log(store.orders.productsDetails.length);
    var totalPrice = store.orders.totalPrice;
    if (store.orders.productsDetails.length == 0) {
      totalPrice = parseInt(data.variantPrice);
    }
    if (store.orders.productsDetails.length >= 1) {
      //totalPrice
      for (var i = 0; i < store.orders.productsDetails.length; i++) {
        totalPrice += parseInt(data.variantPrice);
        dispatch(setTotalPrice(totalPrice));
        console.log(store.orders.totalPrice);
      }
      console.log("working..");
    }
  };

  return (
    <div className="ProductContainer">
      <div className="topNavigation">
        <Stack spacing={2}>
          <Breadcrumbs separator="" aria-label="breadcrumb">
            {breadcrumbs2}
          </Breadcrumbs>
        </Stack>
        <Stack spacing={2}>
          <Breadcrumbs separator="|" aria-label="breadcrumb">
            <a style={{ color: "#818181" }}>Enviar a</a>
            <a style={{ fontWeight: "bold", color: "#444444" }}> Providencia</a>
          </Breadcrumbs>
        </Stack>
      </div>
      {/* Product Display Slider */}
      <div className="productDetails">
        <div className="sliderProduct">
          <Swiper
            loop={true}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="product-image-slider firstSwiper"
            style={{ height: "500px", width: "500px", marginLeft: "0" }}
          >
            <SwiperSlide key="index" style={{ textAlign: "-webkit-center" }}>
              <img
                src={data.image || data.images}
                alt="product Image"
                style={{ height: "100%", borderRadius: "20px" }}
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setactiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Thumbs]}
            className="product-image-slider-thumbs secondSwiper"
            style={{ marginTop: "1rem", display: "block" }}
          >
            {/* {data.images.map((item, index) => ( */}
            <SwiperSlide style={{ width: "100px" }}>
              <div className="product-image-slider-thumbs-wrapper">
                <img
                  src={data.image || data.images}
                  alt="product Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
        <div className="productInformation">
          <div className="productInformationd1">
            <h6 style={{ fontSize: "33px" }}>{data.productName}</h6>
          </div>
          <div className="productInformationd2">
            Puntos :{" "}
            <p className="productInformationd2p1">{data.productPrice || data.variantPrice}</p>
          </div>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <h6 className="productInformationh6">${data.productPrice || data.variantPrice}</h6>
          </div>
          <p className="productInformationp1">$12.990 Precio Normal </p>
          <Divider className="productInformationdivider1" />
          <div id="productDescription1">
            <h6 className="productDescription1h6">1.- Selecciona un horario</h6>
            <p className="productDescription1p1">
              * Se hará un cargo de envío por $99.00 MXN
            </p>
            <div className="Cards">
              {showResults1 ? (
                <button className="button1">
                  <h6 className="Cardsh61">Hoy</h6>
                  {date} {month}
                  {showResults1 ? <Results /> : null}
                </button>
              ) : (
                <button className="button1" onClick={onClick1}>
                  <h6 className="Cardsh62">Hoy</h6>
                  {date} {month}
                </button>
              )}

              {showResults2 ? (
                <button className="button2">
                  <h6 className="Cardsh63">Manana</h6>
                  {nextdate} {month}
                  {showResults2 ? <Results /> : null}
                </button>
              ) : (
                <button className="button2" onClick={onClick2}>
                  <h6 className="Cardsh64">Manana</h6>
                  {nextdate} {month}
                </button>
              )}
              <button className="button3" onClick={handleOpen}>
                <div>
                  <img style={{ width: "25px" }} src={cal} />
                  <p className="Cardsp1">Mas fechas</p>
                  <div
                    className="Cardsd1"
                    style={{
                      display: `${caldatebool ? "flex" : "none"}`,
                    }}
                  >
                    {caldatebool ? `${calDate}` : ""}{" "}
                    {caldatebool ? `${calMonth}` : ""}{" "}
                    {showResults1 &&
                    firsttiming |
                      secondtiming |
                      thirdtiming |
                      fourthtiming |
                      fifthtiming |
                      sixthtiming |
                      seventhtiming
                      ? date
                      : ""}{" "}
                    {showResults1 &&
                    firsttiming |
                      secondtiming |
                      thirdtiming |
                      fourthtiming |
                      fifthtiming |
                      sixthtiming |
                      seventhtiming
                      ? month
                      : ""}
                    {showResults2 &&
                    firsttiming |
                      secondtiming |
                      thirdtiming |
                      fourthtiming |
                      fifthtiming |
                      sixthtiming |
                      seventhtiming
                      ? nextdate
                      : ""}{" "}
                    {showResults2 &&
                    firsttiming |
                      secondtiming |
                      thirdtiming |
                      fourthtiming |
                      fifthtiming |
                      sixthtiming |
                      seventhtiming
                      ? month
                      : ""}
                    <br />
                    {firsttiming |
                    secondtiming |
                    thirdtiming |
                    fourthtiming |
                    fifthtiming |
                    sixthtiming |
                    seventhtiming
                      ? time
                      : ""}
                    <br />
                  </div>
                </div>

                {/* <div
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginBottom: "15px",
                    background: "#72509D",
                    color: "#ffffff",
                    display: `${timedisplay ? "block" : "none"}`,
                  }}
                >
                  {time}
                </div> */}
              </button>
              <Modal
                open={openmod}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="calBox" sx={style}>
                  <img
                    className="Cardspic1"
                    onClick={handleClear}
                    src={cross}
                  />
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
                          <p className="Cardsp2">
                            Selecciona el horario de entrega
                          </p>
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
                            display: `${timebool ? "none" : "block"}`,
                          }}
                        >
                          Sin tiempo seleccionado
                        </p>
                        <div
                          className="Cardsd2"
                          style={{
                            display: `${timebool ? "flex" : "none"}`,
                          }}
                        >
                          <div>
                            <p className="Cardsp7">
                              Su pedido se entregará el día
                            </p>
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
                            <div className="Cardsd4" style={{}}>
                              {time}
                            </div>
                          </div>

                          <button
                            className="confirmbtn"
                            style={{
                              display: `${timebool ? "block" : "none"}`,
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
            </div>
          </div>

          <div className="productInformationline1"></div>
          <div id="productDescription2">
            <h6 className="productDescription2h">
              2.-Agrandar producto (opcional)
            </h6>
            <div className="Cards2">
              <button
                className={active1 ? "selectbtn" : "normalbtn"}
                onClick={handleActive1}
              >
                <h5
                  style={{ fontWeight: "600", fontSize: "18px" }}
                  className={active1 ? "selecth6" : "normalh6"}
                >
                  $84
                </h5>
                <p
                  style={{ fontWeight: "600", fontSize: "18px" }}
                  className={active1 ? "selectp" : "normalp"}
                >
                  GRAND
                </p>
                <p style={{ fontSize: "15px" }}>
                  JG Rose Stems <br /> Triple line Blooms
                </p>
              </button>

              <button
                className={active2 ? "selectbtn" : "normalbtn"}
                onClick={handleActive2}
              >
                <h6
                  style={{ fontWeight: "600", fontSize: "18px" }}
                  className={active2 ? "selecth6" : "normalh6"}
                >
                  $69
                </h6>
                <p
                  style={{ fontWeight: "600", fontSize: "18px" }}
                  className={active2 ? "selectp" : "normalp"}
                >
                  DELUXE
                </p>
                <p style={{ fontSize: "15px" }}>
                  24 Rose Stems <br /> Double the Blooms
                </p>
              </button>

              <button
                className={active3 ? "selectbtn" : "normalbtn"}
                onClick={handleActive3}
              >
                <h6
                  style={{ fontWeight: "600", fontSize: "18px" }}
                  className={active3 ? "selecth6" : "normalh6"}
                >
                  $24
                </h6>
                <p
                  style={{ fontWeight: "600", fontSize: "18px" }}
                  className={active3 ? "selectp" : "normalp"}
                >
                  ORIGINAL
                </p>
                <p style={{ fontSize: "15px" }}>
                  12 Rose Stems
                  <br /> A Classic Sized Bouq
                </p>
              </button>
            </div>
          </div>
          <div className="productInformationline2"></div>

          <div id="productDescription3">
            <h6 className="productDescription3h1">
              3.- Complementar pedido (opcional)
            </h6>
            <Carousel breakPoints={breakPoints} className="carousel">
              {selectableProductImages.map((item, index) => (
                <div key={index}>
                  <img
                    style={{ borderRadius: "20px", padding: "5px" }}
                    src={item.src.default}
                  />
                  <Checkbox
                    style={{
                      bottom: "15.3rem",
                      left: "8rem",
                    }}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 30,
                      },
                      "&.Mui-checked": {
                        color: pink[300],
                      },
                    }}
                  />

                  <h6>{item.title}</h6>
                  <h6
                    style={{ fontWeight: "700" }}
                    className="productDescription3h2"
                  >
                    {item.price}
                  </h6>
                </div>
              ))}
            </Carousel>
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "0.8rem",
              marginBottom: "0.8rem",
            }}
          >
            {/* <Button
              variant="contained"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "60px",
                border: "1px solid black",
              }}
              startIcon={<Gift />}
            >
              <p style={{ fontSize: "medium", marginBottom: "0" }}>
                Ver globos y mas
              </p>
            </Button> */}
          </div>
          <div className="productInformationline3"></div>
          <div id="productTotal">
            <h6 className="productTotalh1">4.- Agregar a tu carrito</h6>
            <p>
              Podrás escribir un mensaje en una tarjeta más adelante en el
              Carrito
            </p>
            <Link className="agregarLink" to="/user/cart">
              <Button
                className="productTotalb1"
                onClick={() => notifySuccess("Product added to cart")}
                variant="contained"
              >
                Agregar( ${data.variantPrice || data.productPrice})
                <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
              </Button>
            </Link>
          </div>
          <div className="productInformationline3"></div>
        </div>
      </div>
      <TabsSection />
      <ProductSection />
    </div>
  );
};

export default Products;
