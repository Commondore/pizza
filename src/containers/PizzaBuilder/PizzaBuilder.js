import {useState} from 'react';
import Controls from '../../components/Pizza/Controls/Controls';
import Pizza from '../../components/Pizza/Pizza';
import Modal from '../../components/UI/Modal/Modal';

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
      cheese: 0,
      olives: 0,
      sausage: 0,
      mushrooms: 0
    }
  );
  const [price, setPrice] = useState(100);
  const [purchasable, setPurchasable] = useState(false);
  const [show, setShow] = useState(false);

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


  return (
    <div className="pizza-wrap">
      <Modal show={show}>
        <h1>Hello Modal</h1>
        <p>
          Далеко-далеко за словесными горами в стране, гласных и согласных живут
          рыбные тексты. Напоивший он меня великий семь курсивных? Повстречался
          страну, подпоясал обеспечивает большого моей, текст сих путь ручеек
          деревни над по всей языкового!
        </p>
      </Modal>
      <Pizza ingredients={ingredients} />
      <Controls
        ingredients={ingredients}
        price={price}
        add={addIngredient}
        remove={removeIngredient}
        purchasable={purchasable}
        purchase={() => setShow(true)}
      />
    </div>
  );
}

export default PizzaBuilder
