import React, { useContext, useEffect } from "react";
import { useInventoryActions } from "./InventoryProvider";
import swal from "sweetalert"
import { useTranslation } from "react-i18next";


const depositState = React.createContext()
const depositDispatch = React.createContext()

const DepositContext = ({ children }) => {

  const [deposit, setDeposit] = React.useState([])




  return (
    <>
      <depositState.Provider value={deposit}>
        <depositDispatch.Provider value={setDeposit}>
          {children}
        </depositDispatch.Provider>
      </depositState.Provider>
    </>
  );
}

export const useDeposit = () => React.useContext(depositState)
export const useDepositActions = () => {
  const [t, i18n] = useTranslation()
  const depositState = useDeposit()
  const setDeposit = React.useContext(depositDispatch)
  const inventoryAction = useInventoryActions()

  const getDateAndTime = () => {
    const date = new Date()
    const options = {
      year: "numeric",
      weekday: "long",
      day: "numeric",
      month: "long"
    }
    const dateAndTime = date.toLocaleDateString("fa-IR", options)
    return dateAndTime;
  }

  const addDepositToCart = (value, type, reason) => {
    setDeposit([...depositState, {
      id: Math.floor(Math.random() * 1000),
      value: value,
      time: getDateAndTime(),
      type: type,
      reason: reason,
    }])
  }

  const getTransactionDeposit = () => {
    if (depositState.length) {
      const allDeposit = depositState.filter(element => element.type === "deposit");
      const totalDeposit = allDeposit.reduce((acc, cur) => acc + cur.value, 0)
      inventoryAction(totalDeposit)
    }
  }

  const getTransactionRemove = () => {
    const isRemoved = depositState.findIndex(item => item.type === "remove")

    if (isRemoved > 0) {
      const allDeposit = depositState.filter(element => element.type === "deposit");
      const totalDeposit = allDeposit.reduce((acc, cur) => acc + cur.value, 0)

      const allRemove = depositState.filter(item => item.type === "remove")
      const totalRemove = allRemove.reduce((acc, cur) => acc + cur.value, 0)

      let finalPrice = totalDeposit - totalRemove

      inventoryAction(finalPrice)
    }
  }

  const saveToLocalStorage = (value) => {
    localStorage.setItem("Transactions", JSON.stringify(value))
  }

  const removeHandler = (id) => {
    swal({
      title: t("Are you delete transactions ?"),
      icon: "warning",
      buttons: [t("Cancel"), t("Yes")],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const filterTransaction = depositState.filter(transaction => transaction.id !== id)
          setDeposit(filterTransaction)
          if (depositState.length == 1) {
            localStorage.clear("Transactions")
          }
          swal(t("The transaction was deleted"), {
            icon: "success",
            buttons: t('Ok')
          });
        }
      });
  }

  const split = (n) => {
    n += '';
    n = n.replace(',', '');
    let x = n.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
      y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
  }

  return { setDeposit, removeHandler, split, saveToLocalStorage, addDepositToCart, getTransactionDeposit, getTransactionRemove }
}

export default DepositContext;