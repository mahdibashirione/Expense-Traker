import Transactions from "../Transactions/Transactions"
import { useDeposit } from "../../context/deposit&removeProvider";
import { useTranslation } from "react-i18next";

const TransactionsList = () => {
  const [t, i18n] = useTranslation()
  const depositState = useDeposit()

  return (
    <div className="bg-white dark:bg-zinc-800 dark:border-t-2 border-zinc-900 w-full h-[calc(100vh-68px)] sticky top-[60px] -mt-4 rounded-t-xl z-20">
      <div className="max-w-[900px] container w-full h-full max-h-[calc(100vh-68px)] flex flex-col items-center justify-start gap-y-2 px-2 py-2">
        <span className="w-16 h-1 rounded-full bg-zinc-200 dark:bg-zinc-900"></span>
        <ul className="w-full h-full overflow-y-scroll">
          {!depositState.length && <span className="w-full block text-center font-sans text-lg mt-4 text-zinc-500">
            {t("There is no transaction !")}
          </span>}

          {depositState.map(item => {
            return <Transactions reason={item.reason} id={item.id} time={item.time} value={item.value} inType={item.type} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default TransactionsList;