import React, { useState } from "react";
import { useSetUserMutation } from "../../features/userApi";

import "./index.css";

type User = {};

export const Contact = () => {
  const [updatePost, result] = useSetUserMutation();
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    updatePost({
      id: 12,
      name,
      phone,
      data: "data",
    });
    setName("");
    setPhone("");
  };

  return (
    <div className="contact">
      <h2 className="contact__h2">Contact</h2>
      <form action="" className="contact__form">
        <div className="contact__wrapper">
          <span>Имя</span>
          <input
            type="text"
            className="contact__input"
            required
            value={name}
            onChange={(event) => setName(event?.target.value)}
          />
        </div>
        <div className="contact__wrapper">
          <span>Телефон</span>
          <input
            type="phone"
            className="contact__input"
            required
            value={phone}
            onChange={(event) => setPhone(event?.target.value)}
          />
        </div>
        <button
          type="submit"
          className="contact__button"
          onClick={(evetn) => onSubmit(evetn)}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};
