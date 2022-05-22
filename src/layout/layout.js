import Navbar from "../components/Navbar/Navbar";
import InventoryProvider from "../context/InventoryProvider";


const Layout = (props) => {
  return (
    <>
      <InventoryProvider>
        <Navbar />
        {props.children}
      </InventoryProvider>
    </>
  );
}

export default Layout;