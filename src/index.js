import React from "react";
import ReactDOM from "react-dom/client";
import Avatar, { TodoList } from "./Avatar";
import TestButtonToolBar from "./Button";
import ChatRoomDemo from "./chat_room_effect";
import CityCheckList from "./city_checkbox";
import { ContextPage } from "./context";
import { peopleArr, peopleObjectArr } from "./data";
import { CityGuessForm } from "./form_input";

import Gallery from "./Gallery";
import PeopleList, { PeopleFilterList } from "./PeopleList";

import Profile from "./Profile";
import CatFriends from "./ref";
import Counter from "./renderState";
import StateGallery from "./StateList";
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
    <StateGallery />
    <Counter />
    <CityGuessForm />
    <ContextPage />
    <CityCheckList />
    <CatFriends />
    <ChatRoomDemo />
  </React.StrictMode>
);
