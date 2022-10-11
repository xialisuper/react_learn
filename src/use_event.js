// import React, { useState, useEffect } from "react";

// export default function DotMoveDemo() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [canMove, setCanMove] = useState(true);

//   const onMove = useEvent((e) => {
//     if (canMove) {
//       setPosition({ x: e.clientX, y: e.clientY });
//     }
//   });
//   //   useEffect(() => {
//   //     window.addEventListener("pointermove", onMove);

//   //     return () => {
//   //       window.removeEventListener("pointermove", onMove);
//   //     };
//   //   });

//   useEffect(() => {
//     window.addEventListener("pointermove", onMove);
//     return () => window.removeEventListener("pointermove", onMove);
//   }, []);

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           oncheckd={canMove}
//           onChange={(e) => setCanMove(e.target.value)}
//         />
//         The dot is allowed to move
//       </label>
//       <hr />
//       <div
//         style={{
//           postion: "absolute",
//           background: "pink",
//           borderRadius: "50%",
//           opacity: 0.6,
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           pointerEvents: "none",
//           left: -20,
//           right: -20,
//           width: 40,
//           height: 40,
//         }}
//       />
//     </>
//   );
// }
