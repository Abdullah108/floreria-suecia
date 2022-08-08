import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Thumbs } from "swiper";
//component
import ProductSection from "../../mainLayout/ProductSection/ProductSection";
import TabsSection from "./Tabs";
import CalendarModal from "./CalendarModal";

// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "./Products.scss";

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
//mui
import Button from "@mui/material/Button";

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

  const [timetext, settimetext] = useState("");

  const firstTime = (event) => {
    settimetext(event.target.innerText);

    if (timetext[2] === ":") {
      setTime("");

      settimeDisplay(false);
    } else {
      setcaldateBool(false);

      settimeDisplay(true);
    }
  };

  console.log(timetext);
  const Results3 = () => (
    <div className="superdiv">
      <div
        className={`firstDiv ${
          timetext.slice(0, 7) === "08:00am" ? "timingselect" : "timingnormal"
        }`}
        onClick={firstTime}
      >
        08:00am - 02:00pm
      </div>
      <div
        className={`secondDiv ${
          timetext.slice(0, 7) === "10:00am" ? "timingselect" : "timingnormal"
        }`}
        onClick={firstTime}
      >
        10:00am - 04:00pm
      </div>
      <div
        className={`thirdDiv ${
          timetext.slice(0, 7) === "03:00am" ? "timingselect" : "timingnormal"
        }`}
        onClick={firstTime}
      >
        03:00am - 08:00pm
      </div>
    </div>
  );

  const [timedisplay, settimeDisplay] = useState(false);

  const [openmod, setopenMod] = useState(false);
  const handleOpen = () => setopenMod(true);

  const [caldatebool, setcaldateBool] = useState();
  const [calvalue, setcalValue] = useState(new Date());

  let calDate = calvalue.getDate(); //taking date and month from calender values
  let calMonth = months[calvalue.getMonth()];

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
    if (showResults1 && timetext[2] === ":") {
      productAttributes.date = date;
      productAttributes.month = month;
    }
    if (showResults2 && timetext[2] === ":") {
      productAttributes.date = nextdate;
      productAttributes.month = month;
    }
    if (timetext[2] === ":") {
      productAttributes.timetext = timetext;
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
        <Stack className="Firstcrumb" spacing={2}>
          <Breadcrumbs separator="" aria-label="breadcrumb">
            {breadcrumbs2}
          </Breadcrumbs>
        </Stack>
        <Stack className="Secondcrumb" spacing={2}>
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
            style={{ height: "400px", width: "400px", marginLeft: "0" }}
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
            <p className="productInformationd2p1">
              {data.productPrice || data.variantPrice}
            </p>
          </div>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <h6 className="productInformationh6">
              ${data.productPrice || data.variantPrice}
            </h6>
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
                  {showResults1 ? <Results3 /> : null}
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
                  {showResults2 ? <Results3 /> : null}
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
                      display: `${timetext[2] === ":" ? "flex" : "none"}`,
                    }}
                  >
                    {caldatebool ? `${calDate}` : ""}{" "}
                    {caldatebool ? `${calMonth}` : ""}{" "}
                    {showResults1 && timetext[2] === ":" ? date : ""}{" "}
                    {showResults1 && timetext[2] === ":" ? month : ""}
                    {showResults2 && timetext[2] === ":" ? nextdate : ""}{" "}
                    {showResults2 && timetext[2] === ":" ? month : ""}
                    <br />
                    {timetext[2] === ":" ? timetext : ""}
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
              <CalendarModal
                setopenMod={setopenMod}
                openmod={openmod}
                setTime={setTime}
                timetext={timetext}
                setcaldateBool={setcaldateBool}
                setcalValue={setcalValue}
                calvalue={calvalue}
                calMonth={calMonth}
                calDate={calDate}
                setConfirm={setConfirm}
                firstTime={firstTime}
              />
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
