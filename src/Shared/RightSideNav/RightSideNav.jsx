import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 flex flex-col space-y-3 mb-6">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 flex flex-col mb-6">
        <h2 className="text-2xl mb-4">Find Us</h2>
        <a className="p-4 flex items-center gap-3 text-lg border border-black rounded-t-lg" href=""><FaFacebook></FaFacebook>
           FaceBook 
        </a>
        <a className="p-4 flex items-center gap-3 text-lg border border-black" href=""><FaTwitter></FaTwitter>
           Twitter 
        </a>
        <a className="p-4 flex items-center gap-3 text-lg border border-black rounded-b-lg" href=""><FaInstagram></FaInstagram>
           Instagram 
        </a>
      </div>

      {/* Q-Zone */}

      <div className="p-4 flex flex-col space-y-6 mb-6">
        <h2 className="text-2xl">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
