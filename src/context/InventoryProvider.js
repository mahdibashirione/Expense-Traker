import React from "react";

const InventoryState = React.createContext()
const InventoryDispatch = React.createContext()

const InventoryProvider = (props) => {

  const [inventory, setInventory] = React.useState(0)

  return (
    <>
      <InventoryState.Provider value={inventory}>
        <InventoryDispatch.Provider value={setInventory}>
          {props.children}
        </InventoryDispatch.Provider>
      </InventoryState.Provider>
    </>
  );
}


export const useInventory = () => React.useContext(InventoryState)
export const useInventoryActions = () => {
  const stateInventory = useInventory()
  const setStateInventory = React.useContext(InventoryDispatch)

  const deposit = () => {
    setStateInventory((prevState) => prevState + 100000)
  }

  return { deposit }
}

export default InventoryProvider;