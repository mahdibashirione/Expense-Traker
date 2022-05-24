import { useDepositActions } from "../../context/deposit&removeProvider";
import { BiTrashAlt } from "react-icons/bi"
const Transactions = ({ type, time, value, inType, id }) => {
  const depositActions = useDepositActions()

  return (
    <li className="w-full py-2 flex gap-x-2 items-center justify-between nth-child2 px-2 rounded-lg">
      <div onClick={() => depositActions.removeHandler(id)} className="w-8 h-8 bg-zinc-300 cursor-pointer hover:bg-red-300 rounded-lg flex items-center justify-center">
        <BiTrashAlt className="text-red-600 text-xl" />
      </div>
      <div>
        <span className="text-md font-sans select-none">{(type === "deposit" && "واریز") || (type === "remove" && "برداشت")}</span>
        <p className="text-sm font-sans select-none text-zinc-500">{time}</p>
      </div>
      <div className="h-10 flex justify-center items-center">
        <span className={`text-sm font-sans font-bold text-gray-100 select-none ${inType === "remove" ? "bg-red-400" : "bg-green-400"} rounded`}>{depositActions.split(value)} تومان</span>
      </div>
    </li>
  );
}

export default Transactions;