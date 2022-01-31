import HomePage from "./pages/homepage/Homepage.components";
import "./app.css";
import { Route, Routes } from "react-router-dom";

import ShopPage from './pages/shop/shop.components'

import Header from './components/header/header.component'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='*' element={<h1>nothing to fetch data</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
