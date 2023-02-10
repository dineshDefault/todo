export const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

export const LocalStorage = {
  setTodosList: (data) => {
    window.localStorage.setItem("todo-list", JSON.stringify(data));
  },
  getTodoList: () => {
    return JSON.parse(window.localStorage.getItem("todo-list"));
  },
};
