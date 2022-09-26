import { useState } from "react";
import { sculptureList } from "./data";

export default function StateGallery() {
  const [index, setindex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    //这里不能写 setIndex(index+= 1) 或者index += 1 setIndex(index)

    setindex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        {index + 1} of {sculptureList.length}
        {showMore && <p>{sculpture.description}</p>}
      </h3>

      <img src={sculpture.url} alt={sculpture.alt}></img>
    </>
  );
}
