import { Switch, Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/" component={PizzaBuilder} />
    </Switch>
  );
}

export default App;
