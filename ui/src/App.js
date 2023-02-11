import './App.css';
import Routers from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStore from './store/store';

const router = createBrowserRouter(Routers);
function App() {
  return (
    <Provider store={GlobalStore}>
    <div className="App">
        <RouterProvider router={router} />
    </div>
    </Provider>
  );
}

export default App;
