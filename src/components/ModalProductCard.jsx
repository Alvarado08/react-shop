export default function ModalProductCard({ product }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="size-64 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  );
}
