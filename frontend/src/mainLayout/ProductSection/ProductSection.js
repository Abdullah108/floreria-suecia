import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

import "react-multi-carousel/lib/styles.css";

import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import truckProductCard from "./../../assets/truckProductCard.svg";

import ProductServices from "../../services/ProductServices";
import useAsync from "../../hooks/useAsync";
import "./ProductSection.scss";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper

const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 840 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 840, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <div className="carousel-button-group">
      <ChevronLeftIcon
        className="left_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
        sx={{ color: pink[300], fontSize: 60 }}
        onClick={() => previous()}
      />
      <ChevronRightIcon
        className="right_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
        sx={{ color: pink[300], fontSize: 60 }}
        onClick={() => next()}
      />
    </div>
  );
};
const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <ChevronLeftIcon
        className="left_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
      />
    ) : (
      <ChevronRightIcon
        className="right_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
      />
    );
  return (
    <Button onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  );
};
const ProductSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 450, itemsToShow: 2, itemsToScroll: 1 },
    { width: 750, itemsToShow: 3, itemsToScroll: 1 },
  ];
  const { data } = useAsync(ProductServices.getAllProducts);
  console.log(data);
  return (
    <div className="productSection">
      <Carousel
        breakPoints={breakPoints}
        renderArrow={myArrow}
        className="carousel"
      >
        {data.map((product, index) => {
          return (
            <div className="dabba">
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={index}
              >
                <img className="dabbaimg" alt="" src={product.image} />
                <div style={{ width: "90%", alignSelf: "center" }}>
                  <p className="dabbap1">{product.productName}</p>
                  <p className="dabbap2">{product.description}</p>
                  <p className="dabbap3"> Ramo del día</p>
                  <p className="dabbap4"> ${product.productPrice}</p>
                  <div className="dabbad1">
                    <Link
                      className="dabbaa1"
                      to={`/user/product/${product._id}`}
                    >
                      Agregar al carrito
                    </Link>
                    <div className="dabbad2">
                      <img
                        className="dabbad2img"
                        alt=""
                        src={truckProductCard}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductSection;
