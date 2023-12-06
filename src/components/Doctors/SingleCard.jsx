import { Link } from "react-router-dom";

const SingleCard = () => {
  return (
    <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        <div className="relative bg-white rounded-2xl dark:bg-gray-700">
          <div className="w-full h-56 px-4 pt-4">
            <img
              src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
              alt=""
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
          <div>
            <div className="p-4">
              <div className="mb-3">
                <a href="">
                  <h2 className="text-2xl font-semibold dark:text-gray-300">
                    Lorem ipsum dor amet ispiciousas
                  </h2>
                </a>
              </div>
              <p className="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                We will take you different places of nepal and will translate
                japanese to english entertain ...
              </p>
            </div>
            <div className="flex items-center justify-end ">
              <Link
                to={`/doctor/id`}
                className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
