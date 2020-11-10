import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { CounterView } from "./pages/CounterViwew";
function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
}

export default App;
