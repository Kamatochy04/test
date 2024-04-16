import React from "react";

import "./card.css";

type Props = {
  img: string | undefined;
  descr: string | undefined;
  name: string | undefined;
  id: number | undefined;
  price: string | undefined;
};

export const Card = ({ img, name, descr, price }: Props) => {
  return (
    <div className="card">
      <img src={img} alt="card" />
      <h4 className="card__title">{name}</h4>
      <p className="card__text">{descr}</p>
      <p className="card__price">
        <span>Цена:</span> {price}
      </p>
    </div>
  );
};
