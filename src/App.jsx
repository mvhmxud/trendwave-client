import "./App.css";
import Index from "./Pages";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import UiContainer from "./components/ui/UiContainer";
import Profile from "./Pages/Profile";
import Protected from "./components/utility/Protected";
function App() {
  return (
    <UiContainer>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/checkout/success" element={<Success />} />
      <Route path="/profile" element={<Protected><Profile /></Protected>} />
    </Routes>
    </UiContainer>
  );
}

export default App;
