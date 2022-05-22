import Transactions from "../Transactions/Transactions"

import { useDeposit } from "../../context/deposit&removeProvider";
import { useEffect } from "react";

const TransactionsList = () => {

  const depositState = useDeposit()

  return (
    <div className="bg-white w-full sticky top-16 -mt-4 rounded-t-2xl h-full z-20">
      <div className="container w-full max-h-[89vh] flex flex-col items-center justify-start gap-y-2 px-4 py-2">
        <span className="w-16 h-1 rounded-full bg-zinc-200"></span>
        <ul className="w-full h-full overflow-y-scroll">
          {depositState.map(item => {
            return <Transactions type={item.type} time={item.time} value={item.valueDeposit} inType={item.type} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default TransactionsList;