import { BiPlus } from "react-icons/bi"
import { BiDownArrowAlt } from "react-icons/bi"
import { Link, Router } from "react-router-dom"
import { FiSettings } from "react-icons/fi"
import { useInventory } from "../../context/InventoryProvider"

const Inventory = () => {
  const stateInventory = useInventory()

  return (
    <section className="w-full bg-blue-500 sticky top-0 right-0">
      <div className="w-full container flex pb-4 px-4 flex-col justify-start items-center">
        <div className="flex flex-col items-center my-8">
          <p className="text-white font-bold font-sans text-xl">
            {stateInventory} تومان
          </p>
          <span className="text-zinc-300 font-sans text-md">موجودی</span>
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