import {useState} from 'react';

function Checkout() {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });
  return (
    <div className="checkout">

    </div>
  )
}

export default Checkout
