import {useState} from 'react';
import Controls from '../../components/Pizza/Controls/Controls';
import Pizza from '../../components/Pizza/Pizza';

import './PizzaBuilder.css';

const PRICES = {
  cheese: 40,
  olives: 60,
  sausage: 70,
  mushrooms: 65
};

function PizzaBuilder() {
  const [ingredients, setIngredients] = useState(
    {
      cheese: 1,
      olives: 1,
      sausage: 0,
      mushrooms: 1
    }
  );

  const [price, setPrice] = useState(100);

  return (
    <div className="pizza-wrap">
      <Pizza ingredients={ingredients} />
      <Controls ingredients={ingredients} price={price} />
    </div>
  );
}

export default PizzaBuilder
