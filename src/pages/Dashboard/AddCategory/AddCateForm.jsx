import { useForm } from "react-hook-form";
import AddProductFrom from "../../../components/Dashboard/AddProduct/AddProductFrom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa6";
import toast from "react-hot-toast";
const AddCateForm = () => {
  const axiosSecure = useAxiosSecure();
  const [imgUrl, setImgUrl] = useState(null);
  const { register, handleSubmit, watch, reset } = useForm({});

  useEffect(() => {
    const getImageUrl = async () => {
      const img = watch("cateImage");

      // Check if "cateImage" is a FileList and contains at least one file
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
  }, [watch("cateImage"), watch]);

  const onSubmit = async (data) => {
    const cateInfo = {
      name: data.categoryName,
      cateImage: data.cateImage[0],
    };

    const { data: cateData } = await axiosSecure.post(
      "/admin/add-category",
      cateInfo
    );
    if (cateData.success) {
      setImgUrl(null);
      reset();
      toast.success(cateData.success);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AddProductFrom
        id="category"
        name="categoryName"
        register={register}
        type="text"
        label={"Category Name"}
        placeholder={"Enter the product name"}
      />

      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-11/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                Category Photo
              </p>
            </div>
            <div className="w-full p-3 md:w-auto">
              {imgUrl ? (
                <img
                  src={imgUrl}
                  alt=""
                  className="object-cover shadow-lg w-24 h-24 rounded-full border-2 border-solid border-gray-600"
                />
              ) : (
                <FaCertificate className="p-6 shadow-lg w-24 h-24 rounded-full border-2 border-solid border-gray-600" />
              )}
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
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (upto 10MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    name="cateImage"
                    className="hidden"
                    {...register("cateImage")}
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
            <p>Save</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCateForm;
