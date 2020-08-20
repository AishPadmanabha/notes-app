import React, { useState } from "react";
import MyTabNav from "../components/MyTabNav";
import NewNoteForm from "../components/NewNoteForm";
import NewProjectForm from "../components/NewProjectForm";
import { getAllNotes } from "../data/data";
import { Col, Row } from "reactstrap";

const App = () => {
  const [projectMap, setProjectMap] = useState(getAllNotes());
  const [activeTab, setActiveTab] = useState("0");
  const [projectNames, setProjectNames] = useState(Object.keys(getAllNotes()));

  return (
    <div className="container" aria-label="noteApp">
      <div className="my-header">Notes On-The-Go</div>
      <MyTabNav
        projectNames={projectNames}
        projectMap={projectMap}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Row>
        <Col className="col-auto">
          <NewNoteForm
            currentProject={projectNames[activeTab]}
            projectMap={projectMap}
            setProjectMap={setProjectMap}
            setProjectNames={setProjectNames}
          />
        </Col>
        <Col>
          <NewProjectForm
            projectNames={projectNames}
            projectMap={projectMap}
            setProjectMap={setProjectMap}
            setProjectNames={setProjectNames}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
