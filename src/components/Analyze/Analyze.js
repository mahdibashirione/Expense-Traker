import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDeposit, useDepositActions } from "../../context/deposit&removeProvider";
import { PieChart } from "react-minimal-pie-chart";
import Transactions from "../Transactions/Transactions";

const Analyze = () => {
  const depositState = useDeposit()
  const depositActions = useDepositActions()
  const [t, i18n] = useTranslation()
  const [selection, setSelection] = useState("All")
  const [data, setData] = useState({})
  const [listTransaction, setListTransaction] = useState([])
  console.log(listTransaction)
  useEffect(() => {
    if (selection === "Spending") {
      getTransactionsRemove()
    } else if (selection === "Income") {
      getTransactionsDeposit()
    } else {
      getTransactionsAll()
    }
  }, [selection])

  const getTransactionsAll = () => {
    const allDeposit = depositState.filter(element => element.type === "deposit");
    const totalDeposit = allDeposit.reduce((acc, cur) => acc + cur.value, 0)
    const dataDeposit = [{ value: totalDeposit, color: "#22C55E", title: "Deposit", colorLabel: "bg-green-500" }]
    const allRemove = depositState.filter(element => element.type === "remove");
    const totalRemove = allRemove.reduce((acc, cur) => acc + cur.value, 0)
    const dataAll = [...dataDeposit, { value: totalRemove, color: "#E11D48", title: "Withdrawal", colorLabel: "bg-rose-600" }]
    setData(dataAll)
    setListTransaction([...allDeposit, ...allRemove])
  }

  const getTransactionsDeposit = () => {
    const allDeposit = depositState.filter(element => element.type === "deposit");
    const totalDeposit = allDeposit.reduce((acc, cur) => acc + cur.value, 0)
    setData([{
      value: totalDeposit, color: "#22C55E",
      title: "Deposit", colorLabel: "bg-green-500"
    },
    {
      value: 0, color: "#E11D48", title: "Withdrawal",
      colorLabel: "bg-rose-600"
    }])
    setListTransaction(allDeposit)
  }

  const getTransactionsRemove = () => {
    const allRemove = depositState.filter(element => element.type === "remove");
    const totalRemove = allRemove.reduce((acc, cur) => acc + cur.value, 0)
    setData([{
      value: totalRemove, color: "#E11D48",
      title: "Withdrawal", colorLabel: "bg-rose-600"
    },
    {
      value: 0, color: "#22C55E",
      title: "Deposit", colorLabel: "bg-green-500"
    }])
    setListTransaction(allRemove)
  }

  return (
    <div className="w-full max-w-[800px] px-4 flex flex-col items-center gap-y-6">
      <div className="flex justify-center items-center p-1 mt-6 border-2 rounded-full dark:border-blue-500">
        <span onClick={(e) => setSelection(e.target.dataset.value)} data-value="Spending" className={`dark:text-white select-none cursor-pointer px-4 py-2  text-slate-800 ${selection === "Spending" ? "bg-blue-500 dark:bg-blue-500 text-white" : ""} rounded-full`}>{t("Spending")}</span>
        <span onClick={(e) => setSelection(e.target.dataset.value)} data-value="All" className={`dark:text-white select-none cursor-pointer px-4 py-2 text-slate-800 ${selection === "All" ? "bg-blue-500 text-white" : ""} rounded-full`}>{t("All")}</span>
        <span onClick={(e) => setSelection(e.target.dataset.value)} data-value="Income" className={`dark:text-white select-none cursor-pointer px-4 py-2  text-slate-800 ${selection === "Income" ? "bg-blue-500 dark:bg-blue-500 text-white" : ""} rounded-full`}>{t("Income")}</span>
      </div>
      <div className="dark:border-zinc-900 dark:border-2 w-full border rounded-lg h-[400px] flex flex-col items-center justify-center">
        <PieChart
          className="h-[350px]"
          animation
          animationDuration={500}
          animationEasing="ease-out"
          center={[65, 52]}
          data={data}
          label={(data) => data.title}
          labelPosition={50}
          lengthAngle={360}
          lineWidth={40}
          paddingAngle={1}
          radius={50}
          rounded={0}
          startAngle={25}
          viewBoxSize={[130, 130]}
        />
        <div className="w-full flex items-center justify-center gap-x-10 -mt-10">
          {data.length &&
            data.map(data =>
              <p className="flex items-center select-none dark:text-white">{t(data.title)} :
                <span className="text-gray-600 mx-1 dark:text-gray-400">{depositActions.split(data.value)}</span>
                <span className={`${data.colorLabel} rounded-full w-5 h-5 block`}></span>
              </p>
            )
          }
        </div>
      </div>
      <div className="dark:border-zinc-900 border dark:border-2 w-full mb-10 rounded-lg flex flex-col items-center justify-center py-6 px-2">
        {!listTransaction.length && <span className="w-full block text-center font-sans text-lg mt-4 text-zinc-500">
          {t("There is no transaction !")}
        </span>}
        {listTransaction &&
          listTransaction.map(item => {
            return (
              <Transactions reason={item.reason} id={item.id} time={item.time} value={item.value} inType={item.type} />
            )
          })
        }
      </div>
    </div >
  );
}

export default Analyze;