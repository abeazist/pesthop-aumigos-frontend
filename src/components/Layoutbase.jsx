// import { Outlet } from "react-router-dom";
// import Menu from "./Menu/Menu";

// export default function Layoutbase() {
//   return (
//     <div style={{ display: "flex" }}>
//       <Menu />
//       <div style={{ flex: 1}}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu/Menu";

export default function Layoutbase() {
  const location = useLocation();
  const esconderMenu = location.pathname === "/Login";

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {!esconderMenu && <Menu />}

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}


// mano sei lá arrumar esse bagulho que tá empurrando tudo pra esquerda