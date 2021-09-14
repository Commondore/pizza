import {useState} from 'react';
import Controls from '../../components/Pizza/Controls/Controls';
import OrderInfo from '../../components/Pizza/OrderInfo/OrderInfo';
import Pizza from '../../components/Pizza/Pizza';
import Modal from '../../components/UI/Modal/Modal';

import './PizzaBuilder.css';

const PRICES = {
  cheese: 40,
  olives: 60,
  sausage: 70,
  mushrooms: 65
};

function PizzaBuilder(props) {
  const [ingredients, setIngredients] = useState(
    {
      cheese: 0,
      olives: 0,
      sausage: 0,
      mushrooms: 0
    }
  );
  const [price, setPrice] = useState(100);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPrchasing] = useState(false);

  const addIngredient = (type) => {
    const ingredientsCopy = {...ingredients};
    ingredientsCopy[type]++;

    setPrice(price => {
      return (price += PRICES[type]);
    });

    setIngredients(ingredientsCopy);
    updatePurchasable(ingredientsCopy);
  };

  const removeIngredient = (event, type) => {
    event.stopPropagation();
    const ingredientsCopy = { ...ingredients };
    if(ingredientsCopy[type] === 0) return;
    ingredientsCopy[type]--;

    setPrice((price) => {
      return (price -= PRICES[type]);
    });

    setIngredients(ingredientsCopy);
    updatePurchasable(ingredientsCopy);
  };

  const updatePurchasable = (ingredients) => {
    const count = Object.values(ingredients) // [1,0, 3, 2]
      .reduce((acc, item) => {
        return acc + item;
      }, 0);

    setPurchasable(() => count > 0);
  };

  const purchaseCancelHandler = () => setPrchasing(false);

  const purchaseContinueHandler = () => {
    const queryParams = Object.keys(ingredients).map((ingName) => {
      return `${ingName}=${ingredients[ingName]}`;
    });
    // ['cheese=1', 'sausage=2' 'olives=0']

    const queryString = queryParams.join("&");
    // 'cheese=1&sausage=2&olives=0'

    props.history.push({
      pathname: "/checkout",
      search: '?' + queryString
    });
  }


  return (
    <div className="pizza-wrap">
      <Modal show={purchasing} closed={purchaseCancelHandler}>
        <OrderInfo
          ingredients={ingredients}
          price={price}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Pizza ingredients={ingredients} />
      <Controls
        ingredients={ingredients}
        price={price}
        add={addIngredient}
        remove={removeIngredient}
        purchasable={purchasable}
        purchase={() => setPrchasing(true)}
      />
    </div>
  );
}

export default PizzaBuilder
