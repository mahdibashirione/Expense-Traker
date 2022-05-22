import { useState } from "react";
import { useDepositActions } from "../../context/deposit&removeProvider";

const Form = ({ nameButton, type }) => {

  const [value, setValue] = useState()
  const depositActions = useDepositActions()

  const submitHandler = (e) => {
    e.preventDefault()
    depositActions.addDepositToCart(value, type)
    setValue('')
  }

  return (
    <form className="w-full flex flex-col items-start p-4">
      <label className="font-sans text-slate-800 mb-2 text-lg">
        مقدار
        <span className="font-sans text-gray-400 mb-2 text-sm mr-2">(تومان)</span>
      </label>
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="w-full outline-none bg-gray-200 py-3 px-2 rounded-lg mb-4" placeholder="250000" />
      <button onClick={submitHandler} type="submit" className="bg-blue-400 text-white text-xl w-full rounded-lg py-3">{nameButton}</button>
    </form>
  );
}

export default Form;