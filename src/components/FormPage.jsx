import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { IoMdAddCircle, IoMdRemoveCircleOutline } from "react-icons/io";

const FormPage = () => {
  const [FormList, setFormList] = useState([
    { ruleType: "", value: "", score: "", operator: "" },
  ]);
  const [connector, setConnector] = useState("");

  const handleFieldRuleType = (e, id) => {
    console.log(e, id);
    FormList[id].ruleType = e.target.value;
    console.log("connector", connector, FormList);
  };

  const handleFieldOperator = (e, id) => {
    console.log(e, id);
    FormList[id].operator = e.target.value;
    console.log("connector", connector, FormList);
  };

  const handleFieldScore = (e, id) => {
    console.log(e, id);
    FormList[id].score = e.target.value;
    console.log("connector", connector, FormList);
  };

  const handleFieldValues = (e, id) => {
    console.log(e, id);
    FormList[id].value = e.target.value;
    console.log("connector", connector, FormList);
  };

  console.log("connector", connector, FormList);

  return (
    <Form className="w-75">
      <Form.Select
        value={connector}
        onChange={(e) => setConnector(e.target.value)}
        aria-label="connector"
        className="w-25"
      >
        <option>Select Connector</option>
        <option value="AND">{"AND"}</option>
        <option value="OR">{"OR"}</option>
      </Form.Select>

      {/* <Form.Check
        inline
        label="AND"
        value={"AND"}
        name="group1"
        type={"radio"}
        id={`AND`}
      /> */}

      {/* <Form.Check
        inline
        label="OR"
        name="group1"
        value={"OR"}
        type={"radio"}
        id={`OR`}
      /> */}

      <Button
        onClick={() => {
          setFormList([
            ...FormList,
            { ruleType: "", value: "", score: "", operator: "" },
          ]);
        }}
      >
        Add Field
        <IoMdAddCircle />
      </Button>

      {FormList.map((field, i) => {
        return (
          <Container key={i}>
            <Row>
              <Col>
                {" "}
                <Form.Select
                  aria-label="Rule Type"
                  onChange={(e) => handleFieldRuleType(e, i)}
                >
                  <option>Select Rule Type</option>
                  <option value="age">age</option>
                  <option value="credit score">credit score </option>
                  <option value="account balance">account balance</option>
                </Form.Select>
              </Col>
              <Col>
                {" "}
                <Form.Select
                  aria-label="Operator"
                  onChange={(e) => handleFieldOperator(e, i)}
                >
                  <option>Select Operator</option>
                  <option value="<">{"<"}</option>
                  <option value=">">{">"}</option>
                  <option value="<=">{"<="}</option>
                  <option value="<=">{"<="}</option>
                  <option value="=">{"="}</option>
                </Form.Select>
              </Col>
              <Col>
                {" "}
                {/* <Form.Label htmlFor="input-values">Input values</Form.Label> */}
                <Form.Control
                  type="number"
                  id="input-values"
                  placeholder="value"
                  aria-describedby="input-values"
                  onChange={(e) => handleFieldValues(e, i)}
                />
              </Col>
              <Col>
                {/* <Form.Label htmlFor="score">Score</Form.Label> */}
                <Form.Control
                  type="number"
                  placeholder="score"
                  id="score"
                  aria-describedby="score"
                  onChange={(e) => handleFieldScore(e, i)}
                />
              </Col>
              <Col>
                {" "}
                {i !== 0 && (
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      // const currentField = FormList.findIndex((form) => form);
                      const currentField = FormList.filter(
                        (field, index) => index !== i
                      );
                      console.log(currentField);
                      setFormList(currentField);
                    }}
                  >
                    <IoMdRemoveCircleOutline />
                    {/* <IoIosRemoveCircle /> */}
                  </Button>
                )}
              </Col>
            </Row>
            {/* <Row>
              <Col>
                {" "}
                <Form.Label htmlFor="input-values">Input values</Form.Label>
                <Form.Control
                  type="number"
                  id="input-values"
                  aria-describedby="input-values"
                />
              </Col>
              <Col>
                <Form.Label htmlFor="score">Score</Form.Label>
                <Form.Control
                  type="number"
                  id="score"
                  aria-describedby="score"
                />
              </Col>
         
            </Row> */}
          </Container>
        );
      })}
    </Form>
  );
};

export default FormPage;
