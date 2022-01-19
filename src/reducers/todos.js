import { bake_cookie, read_cookie } from "sfcookies";

const todos = (state = [], action) => {
  let reminders = null;
  state = read_cookie("reminders");
  switch (action.type) {
    case "ADD_TODO":
      reminders = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
      bake_cookie("reminders", reminders);
      return reminders;
    case "TOGGLE_TODO":
      reminders = state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      bake_cookie("reminders", reminders);
      return reminders;
    case "DELETE_TODO":
      reminders = state.filter((todo) => todo.id !== action.id);
      bake_cookie("reminders", reminders);
      return reminders;
    case "CLEAR_TODOS":
      reminders = [];
      bake_cookie("reminders", reminders);
      return reminders;
    default:
      return state;
  }
};

export default todos;
