const person = {
  name: "Gregorio Y. Zara",
  style: {
    borderRadius: 50,
  },
};

export default function Avatar() {
  const avator = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "greo y.zara";

  return (
    <>
      <h1 style={{ fontSize: 20 }}>{person.name}</h1>
      <img
        alt={description}
        className="avatar"
        src={avator}
        //注入css 需要使用双花括号
        style={person.style}
      />
    </>
  );
}

const baseUrl = "https://i.imgur.com/";
const person2 = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList() {
  return (
    <div style={person2.theme}>
      <h1>{person2.name}'s Todos</h1>
      <img
        className="avatar"
        src={`${baseUrl}${person2.imageId}${person2.imageSize}.jpg`}
        alt={person2.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
