import React from 'react';
import Dashboard from "./pages/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
