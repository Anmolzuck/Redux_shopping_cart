import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 7,
    title: "My Second book",
    description: "The Second book I ever wrote",
  },
  {
    id: "p3",
    price: 8,
    title: "My Third book",
    description: "The Third book I ever wrote",
  },
];

const Products = (props) => {
  const data = DUMMY_DATA.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{data}</ul>
    </section>
  );
};

export default Products;
