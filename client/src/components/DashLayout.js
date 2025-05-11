import { Outlet } from "react-router-dom";
import React from "react";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

// const DashLayout = () => {
//   return (
//     <>
//       <div className="dash-container">
//         <Outlet />
//       </div>
//       <DashFooter />
//     </>
//   );
// };

const DashLayout = () => {
  return (
    <>
      <DashHeader /> {/* ✅ Now it's used */}
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
