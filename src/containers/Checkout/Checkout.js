import {useState, useEffect} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import './Checkout.css';

function Checkout(props) {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    //cheese=2&olives=2&sausage=2&mushrooms=2
    let ingredients = {};
    for (let [key, value] of query.entries()) {
      ingredients[key] = parseInt(value);
    }
    console.log(ingredients);
    setIngredients(ingredients);
  }, []);

  const checkoutCancel = () => {
    props.history.push('/');
  }


  return (
    <div className="checkout">
      <CheckoutSummary
        ingredients={ingredients}
        cancel={checkoutCancel}
      />
    </div>
  );
}

export default Checkout
