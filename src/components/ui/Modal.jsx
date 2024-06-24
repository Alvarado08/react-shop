import ModalProductCard from "../ModalProductCard";

export default function Modal({ cartItems }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        View cart
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Cart Items: {cartItems.length}</h3>
          <div>
            <p className="py-4">
              Total: ${cartItems.reduce((a, b) => a + b.price, 0)}
            </p>
            {cartItems.length === 0 && (
              <p className="text-lg">No items in cart!</p>
            )}
            <ul>
              {cartItems.map((item) => (
                <li className="py-4" key={item.id}>
                  <ModalProductCard product={item} />
                </li>
              ))}
            </ul>
          </div>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
