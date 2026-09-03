import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./reduxs/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
