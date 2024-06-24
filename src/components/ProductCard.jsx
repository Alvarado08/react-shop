export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
      <figure className="size-64 overflow-hidden mx-auto">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
