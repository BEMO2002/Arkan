import React from "react";
import { Link } from "react-router";
import facebook from "../assets/home/facebook.svg";
import instagram from "../assets/home/instagram.svg";
import twitter from "../assets/home/x.svg";
import linkedin from "../assets/home/linked.svg";
const SocialLinks = () => {
  return (
    <div className="fixed lg:right-10  right-0 top-[35%] translate-y-[50%] z-50 flex flex-col gap-3 bg-[#fef4e8] p-3 rounded-[10px]">
      <div>
        <Link to="">
          <img src={facebook} alt="" />
        </Link>
      </div>
      <div>
        <Link to="">
          <img src={instagram} alt="" />
        </Link>
      </div>
      <div>
        <Link to="">
          <img src={twitter} alt="" />
        </Link>
      </div>
      <div>
        <Link to="">
          <img src={linkedin} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
