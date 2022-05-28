import Navbar from "../components/Navbar/Navbar";
import InventoryProvider from "../context/InventoryProvider";
import DepositContext from "../context/deposit&removeProvider"
import ThemeContext from "../context/themeContext";

const Layout = (props) => {
  return (
    <ThemeContext>
      <DepositContext>
        <InventoryProvider>
          <Navbar />
          {props.children}
        </InventoryProvider>
      </DepositContext>
    </ThemeContext>
  );
}

export default Layout;