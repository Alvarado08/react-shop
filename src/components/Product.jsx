import ProductCard from "./ProductCard";

export default function Product({ product }) {
  return (
    <li>
      <ProductCard
        title={product.title}
        price={product.price}
        img={product.image}
      />
    </li>
  );
}
