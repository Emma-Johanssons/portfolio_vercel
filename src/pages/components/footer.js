import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";

export default function Footer() {
  return (
    <div className="bg-white w-11/12 p-11 mt-10 mb-5 rounded-xl shadow-md shadow-gray-400">
      <div className="flex flex-col justify-evenly md:flex-row gap-1 ">
        <div>
          <a
            className="flex gap-2 items-center hover:text-gray-400"
            href="https://github.com/chasacademy-EmmaJohansson"
            target="_blank"
          >
            <BsGithub className="text-6xl md:text-4xl rounded-lg bg-gradient-to-r from-blue-300 to-pink-300" />
            <p className=" text-gray-400 text-start text-xl font-semibold hover:text-gray-500">
              chasacademy-EmmaJohansson
            </p>
          </a>
        </div>
        <div>
          <a
            className="flex gap-2 items-center hover:text-gray-400"
            href="https://www.linkedin.com/in/emma-johansson-a553601b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRmLW9cR3SSGVVf04I%2Bn77w%3D%3D"
            target="_blank"
          >
            <TiSocialLinkedinCircular className="text-6xl md:text-4xl rounded-lg bg-gradient-to-r from-blue-300 to-pink-300" />
            <p className="text-gray-400 text-2xl font-semibold hover:text-gray-500">
              Emma Johansson
            </p>
          </a>
        </div>
        <div className="flex gap-2 items-center hover:text-gray-400">
          <HiOutlinePhone className="text-6xl md:text-4xl rounded-lg bg-gradient-to-r from-blue-300 to-pink-300" />
          <p className="text-gray-400 text-2xl font-semibold hover:text-gray-500">
            070-886-2636
          </p>
        </div>
        <div className="flex gap-2 items-center hover:text-gray-400">
          <GoMail className="text-6xl md:text-4xl rounded-lg bg-gradient-to-r from-blue-300 to-pink-300" />
          <p className="text-gray-400 text-xl text-start font-semibold hover:text-gray-500">
            emma-johanssons@hotmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
