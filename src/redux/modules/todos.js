const ADD_TODO = "todos/ADD_TODO";
const DEL_TODO = "todos/DEL_TODO";
const DONE_TODO = "todos/DONE_TODO";
//action value

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const delTodo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};
export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    id,
  };
};
//action creater

const initialState = {
  todo: [],
};
//초기 상태값

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DEL_TODO:
      return {
        ...state,
        todo: [...state.todo.filter((todo) => todo.id !== action.id)],
      };
    case DONE_TODO:
      return {
        ...state,
        todo: [
          ...state.todo.map((ele) =>
            ele.id === action.id ? { ...ele, isDone: !ele.isDone } : ele
          ),
        ],
      };
    default:
      return state;
  }
};
//리듀서

export default todos;
