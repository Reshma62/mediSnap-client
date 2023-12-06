import { Link, useNavigate } from "react-router-dom";

import InputField from "../../components/Shared/InputField";
import { AiFillEyeInvisible, AiFillEye, AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";
import { imageUplaod } from "../../api/imgUpload";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { passWordCheck } from "../../utils/passwordCheck";
import { emailValidation } from "../../utils/emailValidation";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";
const Registation = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    img: null,
    userNameError: "",
    emailError: "",
    passwordError: "",
  });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      userNameError: "",
      emailError: "",
      passwordError: "",
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgUrl(URL.createObjectURL(file));
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        img: file,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo.username) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        userNameError: "please enter a username",
      }));
    } else if (!userInfo.email) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        emailError: "please enter a Email address",
      }));
    } else if (emailValidation(userInfo.email)) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        emailError: "please enter a valid Email address",
      }));
    } else if (!userInfo.password) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        passwordError: "please enter password",
      }));
    } else if (passWordCheck(userInfo.password)) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        passwordError:
          "please strong  password use at least one uppercase ,lowercase, spcial , number and 6 digits password ",
      }));
    }
    if (
      userInfo.username &&
      userInfo.password &&
      userInfo.email &&
      userInfo.img
    ) {
      setLoading(true);
      const result = await imageUplaod(userInfo.img);
      userInfo.img = result;

      await createUser(userInfo.email, userInfo.password)
        .then(async (result) => {
          const user = result.user;
          console.log("user", user);
          const userObj = {
            userName: userInfo.username,
            email: userInfo.email,
          };
          await updateUser(userInfo.username, userInfo.img)
            .then(async () => {
              await axiosPublic.post("/create-user", userObj);
              Swal.fire({
                title: "Good job!",
                text: "Registration successful",
                icon: "success",
                timer: 1500,
              });
              setUserInfo({
                username: "",
                email: "",
                password: "",
                img: null,
              });
              setImgUrl(null);
              setLoading(false);
              navigate("/login");
            })
            .catch((err) => {
              console.log("err", err);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
        });
    }

    // Now, you can safely log the updated state
  };
  return (
    <div className="bg-slate-900 w-[500px]  mx-auto my-36 shadow-[0_0_50px_#0ef] rounded-2xl p-10 overflow-hidden ">
      <form>
        <div>
          <h2 className="text-white text-center text-3xl border-bottom border-solid border-slate-200 font-black underline underline-offset-8">
            Welcome to
            <span className=" ml-2">
              Medi<span className="text-teal-500 font-black italic">Snap</span>
            </span>
          </h2>
          <p className="capitalize text-white font-medium text-center my-5 text-xl">
            Your
            <span className="text-teal-500 font-black italic">Wellness</span>
            Our
            <span className="text-teal-500 font-black italic">Priority</span>
          </p>
        </div>
        <div className="border-b border-solid border-white py-3">
          <label htmlFor="profile" className="text-white">
            <p className="capitalize">upload your profile picture </p>
            <div className="w-[100px] h-[100px] border border-solid border-white rounded-full relative flex justify-center items-center">
              <img
                src={imgUrl}
                alt=""
                className="rounded-full w-full h-full object-cover"
              />
              <AiOutlineUpload
                className={`${imgUrl ? "hidden" : "absolute text-2xl"}`}
              />
            </div>
          </label>
          <input
            onChange={handleImageUpload}
            type="file"
            id="profile"
            name="img"
            className="hidden"
          />
        </div>
        <InputField
          value={userInfo.username}
          onChangeInput={handleChangeInput}
          label={"User Name"}
          type={"text"}
          name={"username"}
        />
        {userInfo.userNameError && (
          <p className="text-red-500 bg-gray-50 px-2 py-1">
            {userInfo.userNameError}
          </p>
        )}
        <InputField
          value={userInfo.email}
          onChangeInput={handleChangeInput}
          label={"Email"}
          type={"text"}
          name={"email"}
        />
        {userInfo.emailError && (
          <p className="text-red-500 bg-gray-50 px-2 py-1">
            {userInfo.emailError}
          </p>
        )}
        <div className="relative">
          <InputField
            onChangeInput={handleChangeInput}
            label={"Password"}
            type={isOpen ? "text" : "password"}
            value={userInfo.password}
            name={"password"}
          />
          {userInfo.passwordError && (
            <p className="text-red-500 bg-gray-50 px-2 py-1">
              {userInfo.passwordError}
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
        <button
          className="bg-primaryColor text-white text-center px-5 py-2 font-medium text-base rounded-lg w-full"
          onClick={handleSubmit}
        >
          {loading ? (
            <ImSpinner9 className="animate-spin text-center mx-auto" />
          ) : (
            "Register"
          )}
        </button>
      </form>
      <div className="text-white my-3 text-center text-lg">
        <p>
          Already have an account?
          <Link to={"/login"} className="text-white ml-2  font-black ">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registation;
