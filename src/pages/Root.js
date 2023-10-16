import NavigationMenu from "components/NavigationMenu/NavigationMenu";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavigationMenu />
      <Outlet />
    </>

  )
}

export default RootLayout;