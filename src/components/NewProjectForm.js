import React, { useState } from "react";
import {
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormFeedback,
} from "reactstrap";

const NewProjectForm = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [projectName, setProjectName] = useState("");
  const [validate, setValidate] = useState("");

  const setNewProjectData = () => {
    props.setProjectMap({
      ...props.projectMap,
      [projectName]: [],
    });
    props.setProjectNames(props.projectNames.concat(projectName));
  };

  const handleSubmit = () => {
    toggle();
    if (validate === "has-success") {
      setNewProjectData();
    }
    setValidate("");
    setProjectName("");
  };

  const validateProjectName = () => {
    if (props.projectNames.includes(projectName)) {
      setValidate("has-danger");
    } else {
      setValidate("has-success");
    }
  };

  return (
    <div aria-label="newProjectForm">
      <Button className="secondary" onClick={toggle}>
        New Project
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Project Details:</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="projectName">Project Name:</Label>
              <Input
                type="text"
                name="projectName"
                id="projectName"
                onChange={(e) => {
                  setProjectName(e.target.value);
                  validateProjectName(e.target.value);
                }}
                valid={validate === "has-success"}
                invalid={validate === "has-danger"}
              />
              <FormFeedback valid>That's a good project name!</FormFeedback>
              <FormFeedback invalid>
                Uh oh! This project name is taken, sorry!
              </FormFeedback>
            </FormGroup>
            <Button type="submit" color="primary">
              Create
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default NewProjectForm;
