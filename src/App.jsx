import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import FormPage from "./components/FormPage";
import ReactJson from "react-json-view";
import JsonData from "./data.json";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JsonViewPage from "./components/JsonViewPage";

const router = createBrowserRouter([
  { path: "/", element: <FormPage /> },
  { path: "/json-view", element: <JsonViewPage /> },
]);

const App = () => (
  <div className="container-fluid main  ">
    <RouterProvider router={router} />
  </div>
);

export default App;
