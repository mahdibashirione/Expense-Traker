import Transactions from "../Transactions/Transactions"

import { useDeposit } from "../../context/deposit&removeProvider";
import { useEffect } from "react";

const TransactionsList = () => {

  const depositState = useDeposit()

  return (
    <div className="bg-white w-full h-[calc(100vh-60px)] sticky top-[60px] -mt-4 rounded-t-xl z-20">
      <div className="max-w-[900px] container w-full h-full max-h-[calc(100vh-60px)] flex flex-col items-center justify-start gap-y-2 px-2 py-2">
        <span className="w-16 h-1 rounded-full bg-zinc-200"></span>
        <ul className="w-full h-full overflow-y-scroll">
          {!depositState.length && <span className="w-full block text-center font-sans text-lg mt-4 text-zinc-500">تراکنشی وجود ندارد</span>}
          {depositState.map(item => {
            return <Transactions reason={item.reason} id={item.id} type={item.type} time={item.time} value={item.value} inType={item.type} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default TransactionsList;