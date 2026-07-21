import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h2>Navbar</h2>

      <hr />

      <Outlet />

      <hr />

      <h2>Footer</h2>
    </>
  );
}

export default MainLayout;