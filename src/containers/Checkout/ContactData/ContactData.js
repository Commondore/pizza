import Button from "../../../components/UI/Button/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ContactData.css";

const ContactData = ({ingredients}) => {
  const [contacts, setContacts] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const history = useHistory();

  const changeHandler = (event) => {
    setContacts(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      ingredients: {...ingredients},
      customer: {...contacts}
    }

    fetch(
      "https://pizza-red-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then(response => {
      if (response.ok) {
        history.push('/');
      }
    })
  };

  return (
    <div className="contact-data">
      <h3 className="contact-data__title">Введите свои данные</h3>
      <form className="contact-data__form" onSubmit={submitHandler}>
        <div className="contact-data__group">
          <input
            className="contact-data__input"
            name="name"
            type="text"
            placeholder="Ваше имя"
            onChange={changeHandler}
          />
        </div>
        <div className="contact-data__group">
          <input
            className="contact-data__input"
            name="email"
            type="email"
            placeholder="Ваш email"
            onChange={changeHandler}
          />
        </div>
        <div className="contact-data__group">
          <input
            className="contact-data__input"
            name="address"
            type="text"
            placeholder="Ваш адрес"
            onChange={changeHandler}
          />
        </div>
        <div className="contact-data__group">
          <input
            className="contact-data__input"
            name="phone"
            type="tel"
            placeholder="Ваш телефон"
            onChange={changeHandler}
          />
        </div>
        <div className="contact-data__group">
          <Button type="btn-warning">Заказать</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactData;
