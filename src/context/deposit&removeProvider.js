import React, { useContext } from "react";

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
      valueDeposit: value,
      time: getDateAndTime(),
      type: type
    }])
  }
  return { addDepositToCart }
}

export default DepositContext;