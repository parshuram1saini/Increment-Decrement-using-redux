import React from "react";
import ReactDOM from "react-dom";
import store from "./createStore";
import View from "./View";
import { Provider } from "react-redux";

// for showing the redux state in application
// we can do that
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <View />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
