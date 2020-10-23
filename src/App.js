import React from "react";
import Home from "./pages/Home";
import Store from "./services/store";
import { Provider } from "mobx-react";

const store = new Store();
/* Create a new store */

function App() {
  return (
    <Provider store = {store}>
      <Home />
    </Provider>
  );
}

export default App;
