import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import ProductsCard from "../Shared/ProductsCard";

const ProductSlider = ({ heading, products }) => {
  return (
    <Container>
      <div className="mt-20">
        <Heading>{heading}</Heading>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products?.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductSlider;
