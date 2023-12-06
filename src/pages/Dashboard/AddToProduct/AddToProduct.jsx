import { useEffect, useState } from "react";
import useGetAllCategory from "../../../Hooks/admin/useGetAllCategory";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AddProductFrom from "../../../components/Dashboard/AddProduct/AddProductFrom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const AddToProduct = () => {
  const { data: categories } = useGetAllCategory();
  const axiosSecure = useAxiosSecure();
  const [imgUrl, setImgUrl] = useState(null);
  const { register, handleSubmit, watch, reset } = useForm({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getImageUrl = async () => {
      const img = watch("product_image");
      if (img.length > 0) {
        try {
          const imageUrl = URL.createObjectURL(img[0]);
          setImgUrl(imageUrl);
        } catch (error) {
          console.error("Error creating object URL:", error);
        }
      } else {
        setImgUrl(null);
      }
    };

    getImageUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("product_image"), watch]);
  const handleAddProduct = async (data) => {
    setLoading(true);
    const productInfo = {
      name: data.product_name,
      price: data.product_price,
      category: data.category,
      product_image: data.product_image[0],
    };

    const res = await axiosSecure.post(`/admin/add-product`, productInfo);

    if (res.data.message) {
      toast.success(res.data.message);
      reset();
      setLoading(false);
    }
  };
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700 ">
            <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
              Add Medicien
            </h2>
          </div>
          <form action="" onSubmit={handleSubmit(handleAddProduct)}>
            <AddProductFrom
              register={register}
              name={"product_name"}
              label={"Product Name"}
              placeholder={"Enter the product name"}
            />
            <AddProductFrom
              register={register}
              name={"product_price"}
              label={"Product Price"}
              placeholder={"Enter the product price"}
            />
            <div className="py-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full p-3 md:w-1/3">
                    <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                      Description
                    </p>
                  </div>
                  <div className="w-full p-3 md:flex-1">
                    <textarea
                      {...register("product_description")}
                      rows="4"
                      type="Description"
                      placeholder="your product description here.."
                      className="block w-full px-4 py-4 leading-tight placeholder-gray-400 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full p-3 md:w-1/3">
                    <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                      Category
                    </p>
                  </div>
                  <div className="w-full p-3 md:flex-1">
                    <select
                      {...register("category")}
                      className="appearence-none dark:text-gray-400 dark:bg-gray-800  dark:border-gray-800  w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                    >
                      {categories?.map((category) => (
                        <option value={category._id} key={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full p-3 md:w-1/3">
                    <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                      Product photo
                    </p>
                  </div>
                  <div className="w-full p-3 md:w-auto">
                    <img
                      src={imgUrl}
                      alt=""
                      className="object-cover w-24 h-24 rounded-full"
                    />
                  </div>
                  <div className="w-full p-3 md:flex-1">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
                      >
                        <div className="flex flex-col items-center justify-center px-4 pt-5 pb-6">
                          <span className="text-blue-500 dark:text-gray-400">
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-8 h-8 bi bi-cloud-upload"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                              />
                            </svg>
                          </span>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold text-blue-500">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (upto 10MB)
                          </p>
                        </div>
                        <input
                          {...register("product_image")}
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          name="product_image"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-6 flex-wrap -m-1.5">
              <div className="w-full md:w-auto p-1.5">
                <button
                  className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 "
                  type="submit"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    <p>Add Product</p>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddToProduct;
