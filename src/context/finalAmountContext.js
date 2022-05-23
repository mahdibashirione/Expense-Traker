import React from "react";

const AmountState = React.createContext()
const AmountDispatch = React.createContext()

const FinalAmountProvider = (props) => {

  const [finalAmount, setFinalAmount] = React.useState(0)

  return (
    <>
      <AmountState.Provider value={finalAmount}>
        <AmountDispatch.Provider value={setFinalAmount}>
          {props.children}
        </AmountDispatch.Provider>
      </AmountState.Provider>
    </>
  );
}


export const useAmount = () => React.useContext(AmountState)
export const useAmountActions = () => React.useContext(AmountDispatch)

export default FinalAmountProvider;