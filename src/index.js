import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux_store";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 👇️ wrap App in Router
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
