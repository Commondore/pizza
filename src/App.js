import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={PizzaBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
