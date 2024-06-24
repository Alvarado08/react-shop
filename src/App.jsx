import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useEffect } from "react";

import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  const url = "https://fakestoreapi.com";

  const addItemToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const clearCart = () => {
    setCart([]);

    toast.info("Cart cleared!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}/products?limit=12`);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ToastContainer />
      <header className="w-full mx-auto max-w-6xl">
        <NavBar cartItems={cart} clearCart={clearCart} />
      </header>
      <main className="w-full mx-auto max-w-6xl">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center">Error: {error.message}</p>}
        <ProductsList products={products} addItemToCart={addItemToCart} />
      </main>
    </>
  );
}
