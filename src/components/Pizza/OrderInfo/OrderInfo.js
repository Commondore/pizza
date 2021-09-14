import Button from "../../UI/Button/Button";
import "./OrderInfo.css";

const OrderInfo = ({
  ingredients,
  price,
  purchaseContinued,
  purchaseCancelled,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((ingName) => {
    return (
      <li key={ingName} className="order-info__item">
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {ingName}:
        </span>
        <span
          style={{
            color: "#e74c3c",
            fontWeight: "bold",
          }}
        >
          {ingredients[ingName]}
        </span>
      </li>
    );
  });
  return (
    <div className="order-info">
      <h3 className="order-info__title">Ваш заказ</h3>
      <p className="order-info__desc">
        Ваша пицца состоит из следующих ингридиентов:
      </p>
      <ul className="order-info__list">{ingredientSummary}</ul>
      <div className="order-info__price">
        Цена заказа: <strong>{price}</strong> сом
      </div>
      <div className="order-info__actions">
        <Button clicked={purchaseCancelled} type="btn-danger">
          Отмена
        </Button>
        <Button clicked={purchaseContinued} type="btn-success">
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default OrderInfo;
