const AddProductFrom = ({ label, placeholder, name, id, register }) => {
  const registerProps = register ? { ...register(name) } : {};
  return (
    <div className="py-6 border-b border-gray-100 dark:border-gray-800">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/3">
            <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
              {label}
            </p>
          </div>
          <div className="w-full p-3 md:flex-1">
            <input
              id={id}
              {...registerProps}
              className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
              type="text"
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductFrom;
