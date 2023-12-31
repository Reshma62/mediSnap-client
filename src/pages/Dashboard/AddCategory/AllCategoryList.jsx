import { MdAutoDelete, MdEditNote } from "react-icons/md";

const AllCategoryList = () => {
  return (
    <section className="items-center lg:flex  font-poppins  ">
      <div className="justify-center flex-1 px-5">
        <div className="overflow-x-auto bg-white rounded shadow dark:bg-gray-900">
          <div className="">
            <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300 dark:border-gray-700 dark:text-gray-400">
              All category
            </h2>
            <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b dark:border-gray-700">
              <div className="flex items-center pl-3">
                <p className="text-xs text-gray-400">Show</p>
                <div className="px-2 py-2 text-xs text-gray-500 ">
                  <select
                    name=""
                    id=""
                    className="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400 dark:bg-gray-700"
                  >
                    <option value="">15</option>
                    <option value="">17</option>
                    <option value="">19</option>
                  </select>
                </div>
                <p className="text-xs text-gray-400">Category</p>
              </div>
              <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0 dark:border-gray-400">
                <input
                  type="text"
                  className="w-full pr-4 text-sm text-gray-700 bg-white dark:text-gray-400 dark:bg-gray-900 placeholder-text-100 "
                  placeholder="search..."
                />
                <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
                  <span className="mr-2 text-xs ">Go</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <table className="w-full table-auto">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
                  <th className="flex items-center py-3 pl-6 font-medium dark:text-gray-400">
                    <input className="mr-4" type="checkbox" name="" id="" />
                    <span>No.</span>
                  </th>
                  <th className="px-6 py-3 font-medium dark:text-gray-400">
                    Category Name
                  </th>

                  <th className="px-6 py-3 font-medium dark:text-gray-400">
                    Category Image
                  </th>

                  <th className="px-6 py-3 font-medium dark:text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800 py-2">
                  <td className="px-6 py-3 text-sm font-medium dark:text-gray-400">
                    1
                  </td>

                  <td className="px-6 text-sm font-medium dark:text-gray-400">
                    Adobe
                  </td>
                  <td className="px-6 text-sm font-medium dark:text-gray-400">
                    <span className="inline-block px-2 py-1 text-gray-700 dark:text-gray-400">
                      837463
                    </span>
                  </td>

                  <td className="px-6 flex gap-3 text-sm font-medium dark:text-gray-400 items-center">
                    <MdAutoDelete className="text-xl text-red-500 cursor-pointer" />
                    <MdEditNote className="text-2xl cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-wrap items-center justify-between px-6 py-3">
              <p className="mb-4 text-xs lg:mb-0 dark:text-gray-400">
                Showing 1 to 10 of 13 entries
              </p>
              <nav aria-label="page-navigation ">
                <ul className="flex mb-4 list-style-none lg:mb-0">
                  <li className="page-item disabled ">
                    <a
                      href="#"
                      className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md pointer-events-none dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1 mr-1 text-xs text-gray-100 transition-all duration-300 bg-blue-600 rounded-md hover:text-blue-700 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 "
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 "
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item ">
                    <a
                      href="#"
                      className="relative block px-3 py-1 text-xs text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 "
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategoryList;
