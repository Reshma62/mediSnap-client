import { Link } from "react-router-dom";
import Heading from "../Shared/Heading.jsx";
import Container from "../Shared/Container.jsx";
import { imgUrl } from "../../api/imgUrl.js";
import useGetAllCategory from "../../Hooks/admin/useGetAllCategory.jsx";
const ShopByCategory = () => {
  const { data: category, isLoading } = useGetAllCategory();
  if (isLoading) {
    return "Loading category";
  }
  const imgBaseUrl = imgUrl();
  console.log(imgBaseUrl);
  console.log("category", category);
  return (
    <Container>
      <div className="py-10">
        <Link to={"/categrory"}>
          <Heading>Shop by Category</Heading>
        </Link>
        <div className="my-10 text-center">
          <div className=" items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 ">
            {category?.map((cate) => (
              <div
                key={cate}
                className="border h-[230px] border-solid border-teal-800 rounded-lg bg-white shadow-xl py-5 text-center cursor-pointer "
              >
                <img
                  src={`${imgBaseUrl}${cate.categoryImg}`}
                  alt=""
                  className="w-[130px] h-[130px] object-cover"
                />
                <Link to={`/medicine-corner?cat_id=${cate._id}`}>
                  <p className="text-teal-900 pt-5  font-medium hover:-translate-y-2 transition-all duration-500">
                    {cate.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShopByCategory;
