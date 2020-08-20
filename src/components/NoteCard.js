import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const NoteCard = (props) => {
  const [noteText, setNoteText] = useState(props.noteObject.text);
  // const noteText = props.noteObject.text
  var noteURL = props.noteObject.url;
  var noteTitle = props.noteObject.title;
  var noteType = props.noteObject.type;

  const checkURL = (url) => {
    try {
      new URL(url);
    } catch (_) {
      return false;
    }

    return true;
  };

  const checkText = (noteText) => {
    if (noteText === "") {
      return false;
    }
    return true;
  };

  const checkInputType = () => {
    if (noteType.includes("text")) {
      return noteTitle;
    } else {
      if (checkURL(noteURL)) {
        if (checkText(props.noteObject.text)) {
          return (
            <a
              href={noteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="url"
            >
              {props.noteObject.text.replace('"', "")}
            </a>
          );
        } else {
          return (
            <a
              href={noteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="url"
            >
              {noteTitle.replace('"', "")}
            </a>
          );
        }
      } else {
        return <div style={{ color: "red" }}>ALERT: Invalid Link =&gt {noteURL}</div>;
      }
    }
  };

  return (
    <Col sm="6">
      <Card body>
        <CardTitle>
          <b>{checkInputType()}</b>
        </CardTitle>
        <CardText>
          <Form>
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                id="notes"
                placeholder="Enter your notes"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                form
                aria-label="notes"
              />
              {/* {executeAfter()} */}
            </FormGroup>
          </Form>
        </CardText>
      </Card>
    </Col>
  );
};

export default NoteCard;
