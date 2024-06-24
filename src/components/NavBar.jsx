import Cart from "./Cart";

export default function NavBar({ cartItems, clearCart }) {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl md:text-2xl font-bold">
          React Shop
        </a>
      </div>
      <div className="flex-none">
        <Cart items={cartItems} clearCart={clearCart} />
      </div>
    </nav>
  );
}
