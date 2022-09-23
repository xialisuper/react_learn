import { peopleArr } from "./data";
import { getImageUrl } from "./utils";

export default function PeopleList({ peopleArr }) {
  //   const itemList = peopleArr.map((e) => {
  //     return <li>{e}</li>;
  //   });
  const listItems = peopleArr.map((person) => <li key={person}>{person}</li>);
  return <ul>{listItems}</ul>;
}

export function PeopleFilterList({ peopleArr }) {
  //   const chemists = peopleArr.filter((e) => {
  //     return e.profession === "chemist";
  //   });

  const itemList = peopleArr.map((e) => {
    return (
      <li key={e.id}>
        <img src={getImageUrl(e)} />
        <p>
          <b>{e.name}</b>
          {" " + e.profession + " "}
          known for {e.accomplishment}
        </p>
      </li>
    );
  });

  return <ul>{itemList}</ul>;
}
