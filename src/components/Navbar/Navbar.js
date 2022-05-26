import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi"
import { FiAlertOctagon } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [t, i18n] = useTranslation()
  let location = useLocation()

  const [label, seLabel] = useState([
    { path: "/Settings", label: "Settings" },
    { path: "/Charts", label: "Analyze" },
    { path: "/", label: "Bills" },
    { path: "/RemoveFromCart", label: "withdrawal" },
    { path: "/DepositToCart", label: "Deposit" },
    { path: "/Info", label: "Info" },
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
            {t(inLabel.label)}
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