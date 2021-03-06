import "./productList.css";
import Product from "../productCard/Product";
import {products} from "../../data";
import { useState } from "react";


const ProductList = () => {
  
  return (
    

    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Portofolio</h1>
     
    </div>
    <div className="pl-list">
      {products.map(item=>(
        <Product key={item.id} img={item.img} link={item.link}/>
      ))}
      
    </div>
  </div>
  );
};

export default ProductList;