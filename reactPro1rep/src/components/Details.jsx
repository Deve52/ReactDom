import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosInstance from "../Utils/Axios";
import Loading from "./Loading";

const Details = () => {
  let { id } = useParams();
  //   console.log(id);

  const [OneProduct, setOneProduct] = useState(null);

  let getOneData = async () => {
    try {
      let { data } = await AxiosInstance(`/products/${id}`);

      setOneProduct(data);

      // console.log(data);
    } catch (error) {
      console.log(`error`);
    }
  };

  useEffect(() => {
    getOneData();
  }, []);

  return (
    <div className="w-full h-screen py-5 overflow-y-auto ">
      
       {OneProduct ?  <div className=" w-[70vw] h-screen  mx-auto flex justify-center items-center gap-16 ">
        <img
          className="h-[50%]"
          src={OneProduct.image}
          alt=""
        />
        <div className="w-[50%] h-[50%] my-auto  ">
          <h1 className="text-4xl mb-5 font-light">
           {OneProduct.title}
          </h1>
          <h4 className="text-sm font-[500] text-gray-300 mb-5">
            {OneProduct.category}
          </h4>
          <h2 className="text-red-300 text-xl mb-3">${OneProduct.price}</h2>
          <p className="font-light text-lg mb-10">
            {OneProduct.description}
          </p>
          <Link className="text-2xl px-3 py-1 border-solid border-blue-200 border-1 text-blue-200">
            {" "}
            Edit
          </Link>
          <Link className="text-2xl ml-3 px-3 py-1 border-solid border-red-200 border-1 text-red-200">
            {" "}
            Delete
          </Link>
        </div>
      </div>
        : <Loading/>}

    </div>
  );
};

export default Details;
