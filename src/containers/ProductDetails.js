import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedBlog,
  removeSelectedBlog,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.blog);
  const { Image, Title, Article,Subtitle } = product;
  const dispatch = useDispatch();
  const fetchBlogDetail = async (Id) => {
    const response = await axios
      .get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${Id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedBlog(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchBlogDetail(productId);
    return () => {
      dispatch(removeSelectedBlog());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="container ml-5 w-50">
          <div className='d-flex justify-content-between text2'>
            <p>Posted On October 6 2021</p>
            <p><i></i>563 Views</p>
        </div>
      <h1 className="bold">
        {Title}
        </h1>
        <p className="clr">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical </p>
        <img src={Image} className="width"></img>
        <p className="mt-3">{Article}</p>
        <img src={Image} className="width"></img>
        <h3 className="bold">{Subtitle}</h3>
        <p className="mt-3">{Article}</p>

          </div>
      )}
    </div>
  );
};

export default ProductDetails;
