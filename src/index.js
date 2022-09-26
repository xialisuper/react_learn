import React from "react";
import ReactDOM from "react-dom/client";
import Avatar, { TodoList } from "./Avatar";
import TestButtonToolBar from "./Button";
import { peopleArr, peopleObjectArr } from "./data";
import Gallery from "./Gallery";
import PeopleList, { PeopleFilterList } from "./PeopleList";

import Profile from "./Profile";
import Table from "./Table";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <Table />
    <Gallery />
    <Avatar />
    <TodoList />
    <Profile />
    <PeopleList peopleArr={peopleArr} />
    <PeopleFilterList peopleArr={peopleObjectArr} />
    <TestButtonToolBar />
  </React.StrictMode>
);
