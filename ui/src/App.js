import './App.css';
import Routers from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStore from './store/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const router = createBrowserRouter(Routers);
let persistor = persistStore(GlobalStore);


function App() {
  return (
    <Provider store={GlobalStore}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
