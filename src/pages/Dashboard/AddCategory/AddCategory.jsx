import AddCateForm from "./AddCateForm";
import AllCategoryList from "./AllCategoryList";

const AddCategory = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className=" px-4 flex gap-5">
        <div className="p-6 basis-1/2 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700 ">
            <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
              Add Category
            </h2>
          </div>
          <AddCateForm />
        </div>
        <div className="basis-1/2">
          <AllCategoryList />
        </div>
      </div>
    </section>
  );
};

export default AddCategory;
