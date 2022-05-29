import { useDepositActions } from "../../context/deposit&removeProvider";
import { BiTrashAlt } from "react-icons/bi"
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const Transactions = ({ time, value, inType, id, reason }) => {
  const depositActions = useDepositActions()
  const [t, i18n] = useTranslation()
  const location = useLocation()

  return (
    <li className="w-full py-2 flex gap-x-2 items-center justify-between nth-child2 dark:nth-child-dark2 px-2 rounded-lg">
      {location.pathname === "" &&
        <div onClick={() => depositActions.removeHandler(id)} className=" w-8 h-8 border-2 border-red-600 cursor-pointer hover:bg-red-300 dark:hover:bg-zinc-900 rounded-lg flex items-center justify-center">
          <BiTrashAlt className="text-red-600 text-xl" />
        </div>
      }
      <div>
        <span className="text-md font-sans select-none dark:text-white">{reason}</span>
        <p className="text-sm font-sans select-none text-zinc-500">{time}</p>
      </div>
      <div className="h-10 flex justify-center items-center">
        <span className={`text-sm font-sans font-bold text-gray-100 select-none ${inType === "remove" ? "bg-red-400" : "bg-green-400"} rounded`}>{depositActions.split(value)}{t("Toman")}</span>
      </div>
    </li>
  );
}

export default Transactions;