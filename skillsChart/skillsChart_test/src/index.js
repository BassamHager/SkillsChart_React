import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// context
import { AppContextProvider } from "./context/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
