import { Link } from "react-router-dom";

const Button = ({ text, href }) => {
  return (
    <Link to={href}>
      <button className="bg-primaryColor capitalize text-white px-5 py-2 font-medium text-sm rounded-lg">
        {text}
      </button>
    </Link>
  );
};

export default Button;
