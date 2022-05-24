import React, { useContext, useEffect } from "react";
import { useInventoryActions } from "./InventoryProvider";


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

  const addDepositToCart = (value, type) => {
    setDeposit([...depositState, {
      id: Math.floor(Math.random() * 1000),
      value: value,
      time: getDateAndTime(),
      type: type
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

  const split = (n) => {
    const listGroup = n.toString().match(/.{2,3}(?=..)|.+/g);
    return listGroup.join(',')
  }

  return { setDeposit, split, saveToLocalStorage, addDepositToCart, getTransactionDeposit, getTransactionRemove }
}

export default DepositContext;