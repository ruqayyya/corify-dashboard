// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCars from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllCars />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
