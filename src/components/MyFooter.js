import NoteCard from "./NoteCard";
import NewNoteForm from "../components/NewNoteForm";
import { Row, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import NewProjectForm from "./NewProjectForm";

const MyFooter = () => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={String(activeTab)}>
        <Row>
          {projectMap[projectNames[activeTab]].map((note, i) => (
            <NoteCard key={activeTab + i} noteObject={note} />
          ))}
        </Row>
      </TabPane>
      <NewNoteForm
        currentProject={projectNames[activeTab]}
        setNewNoteData={setNewNoteData}
      />
      <NewProjectForm
        setNewProjectData={setNewProjectData}
        projectNames={projectNames}
      />
    </TabContent>
  );
};
