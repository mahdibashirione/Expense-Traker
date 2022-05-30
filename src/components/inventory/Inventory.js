import { BiPlus } from "react-icons/bi"
import { BiDownArrowAlt } from "react-icons/bi"
import { Link, Router } from "react-router-dom"
import { useInventory } from "../../context/InventoryProvider"
import { BiLineChart } from "react-icons/bi"
import { useDepositActions, useDeposit } from "../../context/deposit&removeProvider"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useState } from "react"
const Inventory = () => {
  const depositActions = useDepositActions()
  const depositState = useDeposit()
  const stateInventory = useInventory()
  const [t, i18n] = useTranslation()

  useEffect(() => {
    if (depositState.length) {
      depositActions.saveToLocalStorage(depositState)
    }
    const TransactionsLocal = JSON.parse(localStorage.getItem('Transactions'))
    if (TransactionsLocal) {
      depositActions.setDeposit(TransactionsLocal)
    }
  }, [])

  useEffect(() => {
    if (depositState.length) {
      depositActions.saveToLocalStorage(depositState)
    }
    depositActions.getTransactionDeposit()
    depositActions.getTransactionRemove()
  }, [depositState])


  return (
    <section className="w-full py-6 bg-blue-500 dark:bg-zinc-800 ">
      <div className="w-full max-w-[900px] container flex pb-8 pt-2 px-4 flex-col justify-start items-center">
        <div className="flex flex-col items-center my-8">
          <p className="text-white font-bold font-sans text-xl select-none">
            {!depositState.length ? "0" : depositActions.split(stateInventory)} {t("Toman")}
          </p>
          <span className="text-zinc-300 font-sans text-md select-none">{t("Balance")}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-x-2 mb-4">
          <Link to="/DepositToCart" className="font-sans text-white text-md select-none flex items-center justify-center bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(255,255,255,0.05)] rounded-lg py-4 w-full">
            <BiPlus className="text-2xl h-full flex items-center ml-1" />
            {t("Deposit")}
          </Link>
          <Link to="/RemoveFromCart" className="font-sans text-white text-md select-none flex items-center justify-center bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(255,255,255,0.05)] rounded-lg py-4 w-full">
            <BiDownArrowAlt className="text-2xl h-full flex items-center ml-1" />
            {t("Withdrawal")}
          </Link>
          <Link to="/Charts" className="font-sans text-white text-md select-none flex items-center justify-center bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(255,255,255,0.05)] rounded-lg py-4 w-full">
            <BiLineChart className="text-2xl h-full flex items-center ml-1" />
            {t("Analyze")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Inventory;