import { useState } from "react";

export default function EventDemo2() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMoveEvent(position) {
    setPosition({ x: position.clientX, y: position.clientY });
  }

  //   useEffect(() => {
  //     window.addEventListener("pointermove", handleMouseMoveEvent);
  //     return () =>
  //       window.removeEventListener("pointermove", handleMouseMoveEvent);
  //   }, [canMove]);

  function onCheckBoxChange(event) {
    if (event.target.checked) {
      window.addEventListener("pointermove", handleMouseMoveEvent);
    } else {
      window.removeEventListener("pointermove", handleMouseMoveEvent);
    }
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={onCheckBoxChange} />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}
