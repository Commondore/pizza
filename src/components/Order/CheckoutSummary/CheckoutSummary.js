import ContactData from "../../../containers/Checkout/ContactData/ContactData";
import Pizza from "../../Pizza/Pizza";
import Button from "../../UI/Button/Button";
import {Route} from 'react-router-dom';

const CheckoutSummary = ({ ingredients, cancel, history }) => {

  const checkoutCountinue = () => {
    history.replace("/checkout/contact-data");
  }

  return (
    <>
      <Pizza ingredients={ingredients} />
      <div className="checkout__wrap">
        <h1 className="checkout__title" style={{ textAlign: "center" }}>
          Подтвердите свой заказ
        </h1>
        <div className="order-info__actions" style={{ textAlign: "center" }}>
          <Button type="btn-danger" clicked={cancel}>
            Отмена
          </Button>
          <Button type="btn-success" clicked={checkoutCountinue}>
            Продолжить
          </Button>
        </div>
        <Route
          path="/checkout/contact-data"
          render={(props) => (
            <ContactData ingredients={ingredients} {...props} />
          )}
        />
      </div>
    </>
  );
};

export default CheckoutSummary;
