import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import AnotherLogin from "../../components/Shared/AnotherLogin";
import { useForm } from "react-hook-form";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logInUser } = useAuthContext();
  const location = useLocation(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const result = await logInUser(data.email, data.password);
    if (result) {
      toast.success("Successfully login!");
      navigate(location.state ? location.state : "/");
    }
  };
  return (
    <div className="bg-slate-900 w-[500px]  mx-auto my-36 shadow-[0_0_50px_#0ef] rounded-2xl p-10 overflow-hidden ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="text-white text-center text-3xl border-bottom border-solid border-slate-200 font-black underline underline-offset-8">
            Welcome Back to
            <span>
              Medi
              <span className="text-teal-500 font-black italic">Snap</span>
            </span>
          </h2>
          <p className="capitalize text-white font-medium text-center my-5 text-xl">
            Your{" "}
            <span className="text-teal-500 font-black italic">Wellness</span>{" "}
            Our{" "}
            <span className="text-teal-500 font-black italic">Priority</span>
          </p>
        </div>
        <div className=" text-white relative input-my my-10">
          {" "}
          <input
            type="email"
            required
            placeholder="  "
            {...register("email")}
          />
          <label htmlFor="">Email</label>
          {errors.password && (
            <p className="bg-slate-100 text-red-600 p-1">
              Password is required
            </p>
          )}
        </div>
        {errors.email && (
          <p className="bg-slate-100 text-red-600 p-1"> Email is required</p>
        )}
        <div className=" text-white relative input-my my-10">
          <input
            type={isOpen ? "text" : "password"}
            placeholder="Password"
            required
            {...register("password", { required: true })}
          />
          <label htmlFor="">Password</label>
          {errors.password && (
            <p className="bg-slate-100 text-red-600 p-1">
              Password is required
            </p>
          )}

          <p className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-white">
            {isOpen ? (
              <AiFillEye onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <AiFillEyeInvisible onClick={() => setIsOpen(!isOpen)} />
            )}
          </p>
        </div>
        <input
          className="bg-primaryColor text-white px-5 py-2 font-medium text-base rounded-lg w-full"
          type="submit"
          value="Login"
        />
      </form>

      <div className="text-white my-4 text-center text-lg">
        <p>
          Don&apos;t have account
          <Link to={"/register"} className="text-white font-black text-xl">
            Register Now
          </Link>
        </p>
      </div>
      <AnotherLogin />
    </div>
  );
};

export default Login;
