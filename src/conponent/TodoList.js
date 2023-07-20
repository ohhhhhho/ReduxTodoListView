import React from "react";
import { Link } from "react-router-dom";

function TodoList({ todo, onClickDeleteHandeler, onClickDoneHandler }) {
  return (
    <>
      <div style={boxStyle}>
        <Link
          to={`/works/${todo.id}`}
          style={{
            color: "#222",
            textAlign: "right",
            display: "block",
          }}
        >
          상세보기
        </Link>
        <h1>{todo.title}</h1>
        <p>{todo.cont}</p>
        <button onClick={() => onClickDeleteHandeler(todo.id)}>삭제하기</button>
        <button onClick={() => onClickDoneHandler(todo.id)}>완료하기</button>
      </div>
    </>
  );
}

const boxStyle = {
  width: "200px",
  border: "solid 2px #ffa300",
  padding: "10px",
  borderRadius: "5px",
};

export default TodoList;
