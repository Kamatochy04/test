import React from "react";
import { Card } from "../card/Card";
import { useGetProductQuery } from "../../features/productApi";
import Skeleton from "../skeleton/Skeleton";

import "./index.css";

export const Product = () => {
  const { data, isLoading } = useGetProductQuery("");

  return (
    <div className="products">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Card
          img={data?.image}
          descr={data?.description}
          name={data?.name}
          id={data?.id}
          price={data?.price}
        />
      )}
    </div>
  );
};
