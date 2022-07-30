import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs, setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import HeroSection from "./HeroSection";
const ProductPage = () => {
  const blogs= useSelector((state) => state.allBlogs.blogs);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setBlogs(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", blogs);
  return (
    <>
<HeroSection/>
    <div className="container mt-5">
      <div className="row g-4">

      <ProductComponent />
      </div>
    </div>
    </>
  );
};

export default ProductPage;
