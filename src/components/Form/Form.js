import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDepositActions } from "../../context/deposit&removeProvider";

const Form = ({ nameButton, type }) => {

  let location = useNavigate()

  const [value, setValue] = useState(0)
  const [reason, setReason] = useState()
  const depositActions = useDepositActions()

  const submitHandler = (e) => {

    if ((!value.length) || (!reason.length)) {
      alert('لطفا فیلد را پر کنید')
      return false;
    } else if (isNaN(Number(value))) {
      alert('لطفا مقدار را به عدد وارد کنید')
      setValue('')
      return false;
    }

    e.preventDefault()
    depositActions.addDepositToCart(Number(value), type, reason)
    setValue('')
    setReason('')
    location("/")
  }


  return (
    <form onSubmit={submitHandler} className="w-full flex flex-col items-start p-4 max-w-[450px] justify-center">
      <div class="relative z-0 w-full mb-6 mt-4 group">
        <input onChange={(e) => setValue(e.target.value)} class="block text-slate-800 py-2.5 px-2 w-full text-lg bg-transparent border-2 border-gray-300 appearance-none rounded-lg dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label class="peer-focus:font-medium absolute text-lg text-gray-500 mr-2 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-2 z-10 origin-[0] peer-focus:right-0 bg-white peer-focus:mr-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-09 peer-focus:-translate-y-6">
          مقدار
        </label>
        <span className="font-sans text-gray-400 text-sm">
          {depositActions.split(value)}
          تومان
        </span>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input onChange={(e) => setReason(e.target.value)} value={reason} class="block text-slate-800 py-2.5 px-2 w-full text-lg bg-transparent border-2 border-gray-300 appearance-none rounded-lg dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label class="peer-focus:font-medium absolute text-lg text-gray-500 mr-2 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-2 z-10 origin-[0] peer-focus:right-0 bg-white peer-focus:mr-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-09 peer-focus:-translate-y-6">
          {(type === "deposit" && "از طرف") || (type === "remove" && "برای")}
        </label>
        <span className="font-sans text-gray-400 text-sm">
          {(type === "deposit" && "مثال : حقوق ماهیانه شرکت") || (type === "remove" && "مثال : خرید شارژ , خرید نان")}
        </span>
      </div>
      <button type="submit" className="bg-blue-400 text-white text-xl w-full rounded-lg py-3">{nameButton}</button>
    </form>
  );
}

export default Form;