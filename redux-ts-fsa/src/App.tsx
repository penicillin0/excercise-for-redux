import React from "react";
import "./App.css";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { CounterView } from "./pages/CounterView";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView></CounterView>
    </Provider>
  );
}

export default App;
