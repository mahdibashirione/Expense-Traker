const Transactions = () => {
  return (
    <li className="w-full py-2 flex gap-x-2 justify-between">
      <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center"></div>
      <div>
        <span className="text-md font-sans select-none">واریز به کارت</span>
        <p className="text-sm font-sans select-none text-zinc-500"> جمعه,23 اردیبهشت 1401</p>
      </div>
      <div className="h-10 flex justify-center items-center">
        <span className="text-sm font-sans select-none">100,000 تومان</span>
      </div>
    </li>
  );
}

export default Transactions;