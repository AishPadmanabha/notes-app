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

const NewNoteForm = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [noteType, setNoteType] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteURL, setNoteURL] = useState("");
  const [validate, setValidate] = useState("");

  const setNewNoteData = (noteType, noteTitle, currentProject, noteURL) => {
    const tempData = {
      type: noteType,
      title: noteTitle,
      text: "",
      url: noteURL,
    };
    props.setProjectMap({
      ...props.projectMap,
      [currentProject]: props.projectMap[currentProject].concat(tempData),
    });
  };

  const handleSubmit = () => {
    console.log("here");
    toggle();
    if (validate === "has-success") {
      setNewNoteData(noteType, noteTitle, props.currentProject, noteURL);
    }
  };

  const validateProperty = (a, b) => {
    if (a === b) {
      setValidate("has-danger");
    } else {
      setValidate("has-success");
    }
  };

  return (
    <div aria-label="newNoteForm">
      <Button className="primary" onClick={toggle}>
        New Note
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Note Details:</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Label>What type of a note is it?</Label>
            <FormGroup check>
              <Label for="noteTypeText" check>
                <Input
                  type="radio"
                  id="noteTypeText"
                  name="noteType"
                  onClick={() => setNoteType("text")}
                />
                Text
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="noteTypeLink" check>
                <Input
                  type="radio"
                  id="noteTypeLink"
                  name="noteType"
                  onClick={() => setNoteType("link")}
                />
                Link
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="noteTitle">Note Title:</Label>
              <Input
                type="text"
                name="noteTitle"
                id="noteTitle"
                onChange={(e) => {
                  setNoteTitle(e.target.value);
                  validateProperty(e.target.value, "");
                }}
                valid={validate === "has-success"}
                invalid={validate === "has-danger"}
              />
              <FormFeedback valid>Great!</FormFeedback>
              <FormFeedback invalid>Please provide a title!</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="noteURL">URL (for link note)</Label>
              <Input
                type="text"
                name="noteURL"
                id="noteURL"
                onChange={(e) => setNoteURL(e.target.value)}
              />
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

export default NewNoteForm;
