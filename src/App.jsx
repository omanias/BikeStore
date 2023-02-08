import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import ItemList from "./components/ItemList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route exact path="/catalogue/:category" element={<ItemList />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
