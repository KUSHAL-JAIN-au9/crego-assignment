import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { IoMdAddCircle, IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [FormList, setFormList] = useState([
    { id: 1, ruleType: "", value: "", score: "", operator: "" },
  ]);
  const [connector, setConnector] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const btnElement = document.querySelector(".btn");

  //   console.log(btnElement);
  // }, [FormList[0].score, FormList]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(
    //   connector == "",
    //   FormList[0].value == "",
    //   FormList[0].score == "",
    //   FormList[0].operator == "",
    //   FormList[0].ruleType == ""
    // );

    const outputObject = {
      rules: FormList.map((item) => ({
        key: item.ruleType,
        output: {
          value: parseInt(item.value),
          operator: item.operator,
          score: parseInt(item.score),
        },
      })),
      combinator: connector,
    };
    const stringOutput = JSON.stringify(outputObject);
    console.log(outputObject, stringOutput);
    console.log(FormList);

    setConnector("");
    setFormList([{ id: 1, ruleType: "", value: "", score: "", operator: "" }]);
    navigate("/json-view", { state: outputObject });
  };

  return (
    <Form className="w-50  form-container  " onSubmit={handleSubmit}>
      <Stack gap={3} className="p-2">
        <h1 className="text-center text-white">Expression Engine</h1>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            as={"select"}
            value={connector}
            onChange={(e) => setConnector(e.target.value)}
            aria-label="connector"
            className="p-2 mx-3 w-50 select-arrow "
            required
            placeholder="connector"
          >
            <option hidden>Select Connector</option>
            <option value="AND">{"AND"}</option>
            <option value="OR">{"OR"}</option>
          </Form.Control>

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
            className="ms-auto p-2 bg-dark bg-gradient  border-0 "
            onClick={() => {
              setFormList([
                ...FormList,
                {
                  id: FormList.length + 1,
                  ruleType: "",
                  value: "",
                  score: "",
                  operator: "",
                },
              ]);
            }}
          >
            Add More Rules
            <IoMdAddCircle />
          </Button>
        </Stack>

        <Container
          style={{
            maxHeight: "300px",
            minHeight: "300px",
            overflow: "auto",
          }}
        >
          {FormList.map((field, i) => {
            return (
              <Stack
                gap={3}
                key={i}
                className={` form-node-${i} p-2 d-flex flex-column justify-content-center align-align-items-center `}
              >
                <Row>
                  <Col>
                    {" "}
                    <Form.Control
                      as={"select"}
                      className={`form-rule-${i} select-arrow `}
                      aria-label="Rule Type"
                      // defaultValue={field.ruleType}
                      // value={field.ruleType}
                      required
                      onChange={(e) => handleFieldRuleType(e, i)}
                    >
                      <option hidden>Select Rule Type</option>
                      <option value="age">age</option>
                      <option value="credit score">credit score </option>
                      <option value="account balance">account balance</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    {" "}
                    <Form.Control
                      as={"select"}
                      required
                      className={`form-operator-${i} select-arrow`}
                      // defaultValue={field.operator}
                      aria-label="Operator"
                      variant="secondary"
                      // value={field.operator}
                      onChange={(e) => handleFieldOperator(e, i)}
                    >
                      <option hidden>Select Operator</option>
                      <option value="<">{"<"}</option>
                      <option value=">">{">"}</option>
                      <option value="<=">{"<="}</option>
                      <option value="<=">{"<="}</option>
                      <option value="=">{"="}</option>
                    </Form.Control>
                  </Col>
                  <Col></Col>
                </Row>

                <Row>
                  <Col>
                    {" "}
                    {/* <Form.Label htmlFor="input-values">Input values</Form.Label> */}
                    <Form.Control
                      required
                      className={`form-value-${i} form-input`}
                      type="number"
                      min={0}
                      id="input-values"
                      // defaultValue={field.value}
                      // value={FormList[i].value}
                      placeholder="value"
                      aria-describedby="input-values"
                      onChange={(e) => handleFieldValues(e, i)}
                    />
                  </Col>

                  <Col>
                    <Form.Control
                      required
                      className={`form-score-${i} form-input`}
                      type="number"
                      min={0}
                      // defaultValue={field.score}
                      // value={FormList[i].score}
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
                        className="bg-danger bg-gradient border-0"
                        onClick={() => {
                          const currentField = [...FormList];
                          currentField.splice(i, 1);

                          const node1 = document.querySelector(
                            `.form-rule-${i}`
                          );
                          const node2 = document.querySelector(
                            `.form-value-${i}`
                          );
                          const node3 = document.querySelector(
                            `.form-operator-${i}`
                          );
                          const node4 = document.querySelector(
                            `.form-score-${i}`
                          );
                          node1.value = node1[0].value;
                          node2.value = null;
                          node3.value = node3[0].value;
                          node4.value = null;
                          console.log({ node1, node2, node3, node4 });
                          // const currentField = FormList.filter(
                          //   (f) => f !== field
                          // );
                          // console.log(currentField);
                          setFormList(currentField);
                        }}
                      >
                        <span>Delete</span>
                        <IoMdRemoveCircleOutline className="mx-2" />
                        {/* <IoIosRemoveCircle /> */}
                      </Button>
                    )}
                  </Col>
                </Row>
              </Stack>
            );
          })}
        </Container>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button
            type="submit"
            className="bg-primary bg-gradient btn"
            // onClick={handleSubmit}
            disabled={connector === ""}
          >
            Submit Expression
          </Button>
          {/* <Button variant="outline-secondary">Cancel</Button> */}
        </Stack>
      </Stack>
    </Form>
  );
};

export default FormPage;
