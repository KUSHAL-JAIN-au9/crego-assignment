import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import FormPage from "./components/FormPage";
import ReactJson from "react-json-view";
import JsonData from "./data.json";

const App = () => (
  <div className="container-fluid">
    <FormPage />
    {/* <ReactJson src={JsonData} theme={"summerfruit"} /> */}
  </div>
  // <Stack direction="horizontal" gap={2}>
  //   <Button as="a" variant="primary">
  //     Button as link
  //   </Button>
  //   <Button as="a" variant="success">
  //     Button as link
  //   </Button>
  // </Stack>
);

export default App;
