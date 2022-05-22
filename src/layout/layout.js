import Navbar from "../components/Navbar/Navbar";
import InventoryProvider from "../context/InventoryProvider";
import DepositContext from "../context/deposit&removeProvider"

const Layout = (props) => {
  return (
    <>
      <DepositContext>
        <InventoryProvider>
          <Navbar />
          {props.children}
        </InventoryProvider>
      </DepositContext>
    </>
  );
}

export default Layout;