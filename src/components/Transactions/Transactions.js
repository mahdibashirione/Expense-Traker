const Transactions = ({ type, time, value, inType }) => {
  return (
    <li className="w-full py-2 flex gap-x-2 justify-between">
      <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center"></div>
      <div>
        <span className="text-md font-sans select-none">{type}</span>
        <p className="text-sm font-sans select-none text-zinc-500">{time}</p>
      </div>
      <div className="h-10 flex justify-center items-center">
        <span className={`text-sm font-sans select-none ${inType === "remove" ? "bg-red-500" : "bg-green-500"} rounded`}>{value} تومان</span>
      </div>
    </li>
  );
}

export default Transactions;