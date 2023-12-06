import { useSearchParams } from "react-router-dom";
import ProductsCard from "../../components/Shared/ProductsCard";
import useGetSingleCategory from "../../Hooks/useGetSingleCategory";

const MedicinCorner = () => {
  const [searchParams] = useSearchParams();
  const catId = searchParams.get("cat_id");
  const { data, isLoading } = useGetSingleCategory(catId);
  if (isLoading) {
    return "data is loading.....";
  }
  const product = data[0].product;

  return (
    <>
      {product?.length === 0 ? (
        <p className="text-center text-red-500">No data found</p>
      ) : (
        <div className="grid grid-cols-4 gap-8">
          {product?.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default MedicinCorner;
