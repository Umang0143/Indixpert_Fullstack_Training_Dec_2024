import { RouterProvider } from "react-router-dom";
import MyRouter from "./router/Myrouter";

function App() {
  return (
    <RouterProvider router={MyRouter} />
  );
}

export default App;
