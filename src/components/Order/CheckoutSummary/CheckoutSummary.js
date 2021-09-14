import Pizza from "../../Pizza/Pizza";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ ingredients, cancel }) => {
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
          <Button type="btn-success">Продолжить</Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutSummary;
