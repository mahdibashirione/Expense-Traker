import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDepositActions } from "../../context/deposit&removeProvider";
import { useInventory } from "../../context/InventoryProvider"
const Form = ({ nameButton, type }) => {

  let location = useNavigate()

  const [value, setValue] = useState(0)
  const [reason, setReason] = useState()
  const depositActions = useDepositActions()
  const inventory = useInventory()

  const submitHandler = (e) => {
    e.preventDefault()
    if ((!value.length) || (!reason.length)) {
      alert('لطفا فیلد را پر کنید')
      return false;
    } else if (isNaN(Number(value))) {
      alert('لطفا مقدار را به عدد وارد کنید')
      setValue('')
      return false;
    }
    if ((type === "remove") && (inventory < value)) {
      alert("موجودی ناکافی")
      return false
    }

    depositActions.addDepositToCart(Number(value), type, reason)
    setValue('')
    setReason('')
    location("/")
  }


  return (
    <form onSubmit={submitHandler} className="w-full flex flex-col items-start p-4 max-w-[450px] justify-center">
      {type === "remove" && <span className=" select-none font-sans text-slate-800 dark:text-gray-400">
        موجودی :
        <span className="text-sm font-sans mr-2 text-gray-500 dark:text-gray-300 select-none ">
          {depositActions.split(inventory)}
          تومان
        </span>
      </span>}
      <div class={`relative z-0 w-full mb-6  group ${type === "remove" ? "mt-10" : "mt-4"}`}>
        <input inputMode="numeric" onChange={(e) => setValue(e.target.value)} class="dark:text-white block text-slate-800 py-4 px-2 w-full text-lg bg-transparent border border-gray-300 appearance-none rounded-lg dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label class="peer-focus:font-medium absolute text-md text-gray-500 mr-2 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-2 z-10 origin-[0] peer-focus:right-0 bg-white dark:bg-zinc-800 peer-focus:mr-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-09 peer-focus:-translate-y-6 ">
          مقدار
        </label>
        <span className="font-sans text-amber-500 font-bold text-sm">
          {depositActions.split(value)}
          تومان
        </span>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input onChange={(e) => setReason(e.target.value)} value={reason} class="dark:text-white block text-slate-800 py-4 px-2 w-full text-lg bg-transparent border border-gray-300 appearance-none rounded-lg dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label class="peer-focus:font-medium absolute text-md text-gray-500 mr-2 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-2 z-10 origin-[0] peer-focus:right-0 bg-white dark:bg-zinc-800 peer-focus:mr-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-09 peer-focus:-translate-y-6">
          شرح
        </label>
      </div>
      <button type="submit" className="bg-blue-400 dark:bg-blue-600 mt-4 text-white text-xl w-full rounded-lg py-3">{nameButton}</button>
    </form>
  );
}

export default Form;