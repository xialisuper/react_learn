/*

How to write reducer :
1. Move from setting state to dispatching actions.
2. Write a reducer function.
3. Use the reducer from your component.


Write reducer well:

1. Reducers must be pure. update objects and arrays without mutations
2. Each action describes a single user interaction, even if that leads to multiple changes in the data
*/

import { useReducer } from "react";
export default function TaskList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerayr</h1>
      //todo:
    </>
  );

  function tasksReducer(tasks, action) {
    switch (action.id) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }

      case "deleted": {
        return tasks.filter((task) => task.id !== action.id);
      }
      case "changed": {
        return tasks.map((task) => {
          if (task.id === action.id) {
            return action.task;
          } else {
            return task;
          }
        });
      }

      default:
        throw Error("unknown action:" + action.type);
    }
  }
}
