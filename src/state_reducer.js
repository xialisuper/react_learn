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
