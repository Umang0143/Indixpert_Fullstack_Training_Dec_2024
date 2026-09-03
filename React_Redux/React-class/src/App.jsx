import "./assets/sass/style.scss";

import { RouterProvider } from "react-router-dom";
import { routs } from "./layouts/DataModeRoutes.jsx";

function App() {
  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}

export default App;
