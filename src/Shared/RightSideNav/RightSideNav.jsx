import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-2xl">Right Side</h2>
      <button className="btn">
      <FaGoogle />
        Login With Google
      </button>
      <button className="btn">
      <FaGithub />
        Login With Github
      </button>
    </div>
  );
};

export default RightSideNav;
