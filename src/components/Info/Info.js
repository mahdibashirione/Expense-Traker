const Info = () => {
  return (
    <div className="font-sans text-lg p-4 w-full max-w-[800px] gap-y-4 flex flex-col items-start">
      <span className="text-slate-800 select-none">
        توسعه دهنده :
        <span className="text-gray-500 text-md mr-2 select-none">مهدی بشیری</span>
      </span>
      <span className="text-slate-800 select-none">
        تکنولوژی های استفاده شده :
        <span className="text-gray-500 text-md mr-2 select-none">SPA / hooks / Context / Costume hook / Actions /</span>
      </span>
      <span className="text-slate-800 select-none">
        گیت هاب :
        <a href="https://github.com/mahdibashirione/Expense-Traker.git" className=" select-none text-blue-900 text-md font-bold  mr-2">دیدن کد</a>
      </span>
      <span className="text-slate-800 select-none">
        حدف پروژه :
        <span className="text-gray-500 text-md mr-2 select-none">مدیریت خرج و مخارج</span>
      </span>
    </div>
  );
}

export default Info;