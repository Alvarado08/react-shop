import ProductCard from "./ProductCard";

export default function ProductsList({ products, addItemToCart }) {
  return (
    <ul className="w-full p-10 grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} addToCart={addItemToCart} />
        </li>
      ))}
    </ul>
  );
}
