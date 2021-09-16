import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={PizzaBuilder} />
        <Route render={() => <h1>Страница не найдена</h1>}/>
      </Switch>
    </Layout>
  );
}

export default App;
