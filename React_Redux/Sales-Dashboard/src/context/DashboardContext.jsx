import { createContext, useContext, useState } from "react";
import { dashboardData } from "../util/DashboardData";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState("24h");

  return (
    <DashboardContext.Provider
      value={{
        activeFilter,
        setActiveFilter,
        data: dashboardData[activeFilter],
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
