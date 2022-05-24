import { BiPlus } from "react-icons/bi"
import { BiDownArrowAlt } from "react-icons/bi"
import { Link, Router } from "react-router-dom"
import { FiSettings } from "react-icons/fi"
import { useInventory } from "../../context/InventoryProvider"
import { useDepositActions, useDeposit } from "../../context/deposit&removeProvider"
import { useEffect } from "react"
import { list } from "postcss"

const Inventory = () => {
  const depositActions = useDepositActions()
  const depositState = useDeposit()

  const stateInventory = useInventory()

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
    <section className="w-full bg-blue-500 sticky top-0 right-0">
      <div className="w-full container flex pb-4 px-4 flex-col justify-start items-center">
        <div className="flex flex-col items-center my-8">
          <p className="text-white font-bold font-sans text-xl select-none">
            {depositActions.split(stateInventory)} تومان
          </p>
          <span className="text-zinc-300 font-sans text-md select-none">موجودی</span>
        </div>
        <div className="w-full flex items-center justify-between gap-x-2 mb-4">
          <Link to="/DepositToCart" className="font-sans text-white text-md select-none flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-lg py-4 w-full">
            <BiPlus className="text-2xl h-full flex items-center ml-1" />
            واریز
          </Link>
          <Link to="/RemoveFromCart" className="font-sans text-white text-md select-none flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-lg py-4 w-full">
            <BiDownArrowAlt className="text-2xl h-full flex items-center ml-1" />
            برداشت
          </Link>
          <Link to="/Settings" className="font-sans text-white text-md select-none flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-lg py-4 w-full">
            <FiSettings className="text-2xl h-full flex items-center ml-1" />
            تنظیمات
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Inventory;