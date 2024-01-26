import React from "react";
import { Button, Container } from "react-bootstrap";
import ReactJson from "react-json-view";
import { useLocation, useNavigate } from "react-router-dom";

const JsonViewPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);
  return (
    <Container>
      {" "}
      <h1 className="text-center text-white">Json View of Data</h1>
      <Button
        onClick={() => navigate("/")}
        className="p-2 bg-dark bg-gradient my-2"
      >
        Go Back
      </Button>
      <ReactJson src={state} theme={"summerfruit"} displayDataTypes={false} />
    </Container>
  );
};

export default JsonViewPage;
