import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi"
import { BiCheck } from "react-icons/bi"

import {
  Accordion, AccordionItem,
  AccordionItemHeading, AccordionItemButton, AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTheme, useThemeActions } from "../../context/themeContext";
const SettingAccordion = () => {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState('fa')
  const navigate = useNavigate()

  const theme = useTheme()
  const themeActions = useThemeActions()

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

      <Accordion className="rounded-lg border dark:border-2 dark:border-zinc-900 overflow-hidden">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="bg-zinc-100 dark:bg-zinc-900 dark:text-white py-4 px-2 rounded-t-lg flex items-center justify-between">
              {t("Language")}
              <BiChevronDown className="text-2xl" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div class="flex flex-col gap-y-6">
              <span onClick={e => setLang(e.target.dataset.lang)} data-lang="en" className="dark:text-white flex items-center cursor-pointer select-none font-sans  text-gray-700">{t("English")}
                {lang === "en" && <BiCheck className="text-xl mr-2" />}
              </span>
              <span onClick={e => setLang(e.target.dataset.lang)} data-lang="fa" className="dark:text-white flex items-center cursor-pointer select-none font-sans  text-gray-700">{t("فارسی")}
                {lang === "fa" && <BiCheck className="text-xl mr-2" />}
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="bg-zinc-100 dark:bg-zinc-900 dark:text-white py-4 px-2 flex items-center justify-between">
              {t("Theme")}
              <BiChevronDown className="text-2xl" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div class="flex flex-col gap-y-6">
              <span onClick={e => themeActions.setTheme(e.target.dataset.theme)} data-theme="dark" className="dark:text-white flex items-center cursor-pointer select-none font-sans  text-gray-700">
                {t("Dark")}
                {theme === "dark" && <BiCheck className="text-xl mr-2" />}
              </span>
              <span onClick={e => themeActions.setTheme(e.target.dataset.theme)} data-theme="lithe" className="dark:text-white flex items-center cursor-pointer select-none font-sans  text-gray-700">
                {t("Lithe")}
                {theme === "lithe" && <BiCheck className="text-xl mr-2" />}
              </span>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div >
  );
}

export default SettingAccordion;