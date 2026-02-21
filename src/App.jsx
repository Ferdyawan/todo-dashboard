import { Provider } from "react-redux";
import { store } from "./app/store";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
