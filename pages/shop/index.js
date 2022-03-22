import axios from "axios";
import Link from "next/link";
import React from "react";

const Shop = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((item) => 
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default Shop;

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/roozbahani92/onlineshopFakeData/laptops"
  );

  console.log("hello");
  return {
    props: {
      products: response.data,
    },
  };
};
