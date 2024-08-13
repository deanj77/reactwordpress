import myLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const IconSite = () => {
  return (
    <div className="mobile-screen:w-1/3 flex justify-center items-center">
      <Link to="/">
        <img src={myLogo} alt="logo" />
      </Link>
    </div>
  );
};

export default IconSite;
