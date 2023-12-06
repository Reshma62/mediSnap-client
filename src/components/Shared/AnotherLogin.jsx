import GoogleIcon from '../../assets/google.png'
import GithubIcon from '../../assets/github.png'
const AnotherLogin = () => {
  return (
    <div>
      <div className="border border-solid border-white rounded-md text-center py-3 mb-5 text-white flex justify-center items-center gap-2 cursor-pointer">
        <img src={GoogleIcon} alt="" className="w-6" />
        <p className="capitalize font-bold">login with google</p>
      </div>
      <div className="border border-solid border-white rounded-md text-center py-3 text-white flex justify-center items-center gap-2 cursor-pointer">
        <img src={GithubIcon} alt="" className="w-6" />
        <p className="capitalize font-bold">login with Github</p>
      </div>
    </div>
  );
}

export default AnotherLogin;