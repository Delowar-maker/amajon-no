import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './componentes/Header/Header';
import Invantory from "./componentes/Invantory/Invantory";
import NotFount from "./componentes/NotFount/NotFount";
import ProductDetail from "./componentes/ProductDetail/ProductDetail";
import Review from './componentes/Review/Review';
import Shop from './componentes/Shop/Shop';


function App() {
  return (
    <div className="App">
       <Header></Header>
       <Router>
         <Switch>
           <Route path="/shop">
            <Shop></Shop>
           </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
          <Route path="/invantory">
            <Invantory></Invantory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFount></NotFount>
          </Route>
        </Switch>  
       </Router>
       
    </div>
  );
}

export default App;
