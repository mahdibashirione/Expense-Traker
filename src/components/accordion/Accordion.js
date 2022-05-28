import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi"
import { BiCheck } from "react-icons/bi"

const Accordion = () => {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState('fa')
  const navigate = useNavigate()

  useEffect(() => {
    const langStorage = JSON.parse(localStorage.getItem("Language"))
    if (langStorage) {
      setLang(langStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Language", JSON.stringify(lang))
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <div className="w-full max-w-[600px] px-6 py-4" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
      <div className="flex items-center justify-between px-2 py-4 text-sans w-full border-b border-zinc-800">
        <h2 className="select-none"> {t("Language")}</h2 >
        {/*<BiChevronDown className="text-2xl" />*/}
      </div>
      <div class="p-5 flex flex-col gap-y-6">
        <span onClick={e => setLang(e.target.dataset.lang)} data-lang="en" className="flex items-center cursor-pointer select-none font-sans  text-gray-700">{t("English")}
          {lang === "en" && <BiCheck className="text-xl mr-2" />}
        </span>
        <span onClick={e => setLang(e.target.dataset.lang)} data-lang="fa" className="flex items-center cursor-pointer select-none font-sans  text-gray-700">{t("فارسی")}
          {lang === "fa" && <BiCheck className="text-xl mr-2" />}
        </span>
      </div>
      <div className="flex items-center justify-between px-2 py-4 text-sans w-full border-b border-zinc-800">
        <h2 className="select-none"> {t("Theme")}</h2 >
        {/*<BiChevronDown className="text-2xl" />*/}
      </div>
      <div class="p-5 flex flex-col gap-y-6">
        <span className="cursor-pointer select-none font-sans  text-gray-700">{t("Dark")}</span>
        <span className="cursor-pointer select-none font-sans  text-gray-700">{t("Lithe")}</span>
      </div>
    </div >
  );
}

export default Accordion;