import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTodo, doneTodo } from "../redux/modules/todos";
import TodoList from "../conponent/TodoList";
import AddForm from "../conponent/AddForm";
import styled from "styled-components";

function List() {
  const { todo } = useSelector((state) => state.todos);
  console.log("ApptodoStore", todo);
  const dispatch = useDispatch();
  const onClickDeleteHandeler = (id) => {
    dispatch(delTodo(id));
  };
  const onClickDoneHandler = (id) => {
    dispatch(doneTodo(id));
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>TodoList</h1>
      <FormWrap>
        <AddForm todo={todo} />
      </FormWrap>
      <h2 style={SmallTit}>진행중</h2>
      <ListWrap>
        {todo.map((ele) => {
          return (
            !ele.isDone && (
              <>
                <TodoList
                  todo={ele}
                  key={ele.id}
                  onClickDoneHandler={onClickDoneHandler}
                  onClickDeleteHandeler={onClickDeleteHandeler}
                />
              </>
            )
          );
        })}
      </ListWrap>
      <h2 style={SmallTit}>완료</h2>
      <ListWrap>
        {todo.map((ele) => {
          return (
            ele.isDone && (
              <>
                <TodoList
                  todo={ele}
                  key={ele.id}
                  onClickDoneHandler={onClickDoneHandler}
                  onClickDeleteHandeler={onClickDeleteHandeler}
                />
              </>
            )
          );
        })}
      </ListWrap>
    </>
  );
}
const SmallTit = {
  paddingLeft: "20px",
};
const FormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: #f7f7f7;
`;
const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
`;
export default List;
