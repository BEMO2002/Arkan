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
        <Link to="https://www.facebook.com/share/1BnqRzJ4zh/">
          <img src={facebook} alt="" />
        </Link>
      </div>
      <div>
        <Link to="https://www.instagram.com/arkan220a/">
          <img src={instagram} alt="" />
        </Link>
      </div>
      <div>
        <Link to="https://x.com/Arkan227286">
          <img src={twitter} alt="" />
        </Link>
      </div>
      <div>
        <Link to="https://www.linkedin.com/company/arkan-company22">
          <img src={linkedin} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
