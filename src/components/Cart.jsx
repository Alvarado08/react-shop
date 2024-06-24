import Modal from "./ui/Modal";

import { ShoppingCart } from "lucide-react";
import { Trash } from "lucide-react";

export default function Cart({ items, clearCart }) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <ShoppingCart size={24} />
          <span className="badge badge-sm indicator-item">{items.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{items.length} items</span>
          <span className="text-secondary">
            Subtotal: ${items.reduce((a, b) => a + b.price, 0)}
          </span>
          <div className="card-actions items-center">
            <Modal cartItems={items} />
            <button onClick={clearCart}>
              <Trash size={24} color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
