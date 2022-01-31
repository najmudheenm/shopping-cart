import HomePage from "./pages/homepage/Homepage.components";
import "./app.css";
import { Route, Routes } from "react-router-dom";

import ShopPage from './pages/shop/shop.components'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shope' element={<ShopPage />}/>

      </Routes>
    </div>
  );
}

export default App;
