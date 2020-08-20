import React, { useState } from "react";
import classnames from "classnames";
import NoteCard from "./NoteCard";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row } from "reactstrap";

const MyTabNav = (props) => {
  const toggle = (tab) => {
    if (props.activeTab !== tab) props.setActiveTab(tab);
  };
  console.log(props);
  return (
    <div aria-label="myTabPane">
      <main>
        <Nav tabs>
          {props.projectNames.map((project, i) => (
            <NavItem key={i} className="font-weight-bold">
              <NavLink
                className={classnames({
                  active:
                    props.activeTab === String(props.projectNames.indexOf(project)),
                })}
                onClick={() => {
                  toggle(String(props.projectNames.indexOf(project)));
                }}
              >
                {project}
              </NavLink>
            </NavItem>
          ))}
          <TabContent activeTab={props.activeTab}>
            <TabPane tabId={String(props.activeTab)}>
              <Row>
                {props.projectMap[props.projectNames[props.activeTab]].map(
                  (note, i) => (
                    <NoteCard key={props.activeTab + i} noteObject={note} />
                  )
                )}
              </Row>
            </TabPane>
          </TabContent>
        </Nav>
      </main>
    </div>
  );
};

export default MyTabNav;
