import { useState } from "react";
import { BiChevronRight } from "react-icons/bi"
import { FiAlertOctagon } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom";



const Navbar = () => {

  let location = useLocation()

  const [label, seLabel] = useState([
    { path: "/Settings", label: "تنظیمات" },
    { path: "/Charts", label: "انالیز" },
    { path: "/", label: "صورت حساب" },
    { path: "/RemoveFromCart", label: "برداشت از حساب" },
    { path: "/DepositToCart", label: "واریز به حساب" },
    { path: "/Info", label: "درباره ما" },
  ])
  const inLabel = label.find(item => item.path == location.pathname)

  return (
    <header className="w-full bg-blue-500 sticky top-0 right-0 z-20">
      <nav className="w-full container flex py-4 px-4">
        <div className="w-1/6 flex items-center justify-start">
          {location.pathname === "/" ? <Link to="/Settings"><FiSettings className="text-white text-2xl cursor-pointer" /></Link> : <Link to="/">
            <BiChevronRight className="text-white text-3xl cursor-pointer" />
          </Link>}
        </div>
        <div className="w-4/6 flex items-center justify-center">
          <span className="font-sans font-bold text-white text-lg select-none">
            {inLabel.label}
          </span>
        </div>
        <div className="w-1/6 flex items-center justify-end">
          <Link to="/Info">
            <FiAlertOctagon className="text-white text-2xl cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;