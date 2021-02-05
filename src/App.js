import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import Products from './Products'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Products/></Route>
          <Route exact path="/products/:id"><ProductDetails /></Route>
          <Route exact path="/cart"><Cart /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
