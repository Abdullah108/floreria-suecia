import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import delivery from "./../../assets/delivery.svg";
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

const ProductSection = () => {
  const { data } = useAsync(ProductServices.getAllProducts);
  console.log(data);
  return (
    <div className="productSection">
      <Carousel
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive2}
        infinite={true}
        swipeable={true}
        containerClass="home-carousel h-full"
      >
        {data.map((product, index) => {
          return (
            <div className="dabba">
              <div key={index}>
                <img alt="" style={{ width: "100%" }} src={product.image} />
                <p className="dabbap1">{product.productName}</p>
                <p className="dabbap2">{product.description}</p>
                <p className="dabbap3"> Ramo del día</p>
                <p className="dabbap4"> ${product.productPrice}</p>
                <div
                  style={{
                    display: "flex",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Link className="dabbaa1" to={`/user/product/${product._id}`}>
                    <Button className="dabbab1">Agregar al carrito</Button>
                  </Link>
                  <img alt="" style={{ width: "20px" }} src={delivery} />
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
