import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function AddForm({ todo }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState({
    id: 0,
    title: "",
    cont: "",
    isDone: false,
  });
  const onChangeHandler = (e) => {
    setContent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      isDone: false,
    }));
  };
  const onSubmitHandler = (e) => {
    const { id, title, cont, isDone } = content;
    dispatch(
      addTodo({
        id,
        title,
        cont,
        isDone,
      })
    );

    setContent((pre) => ({
      id: todo.length + 1,
      title: "",
      cont: "",
      isDone,
    }));
  };
  return (
    <>
      <input
        type="text"
        placeholder="제목"
        name="title"
        value={content.title}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        placeholder="내용"
        name="cont"
        value={content.cont}
        onChange={onChangeHandler}
      />
      <button onClick={onSubmitHandler}>등록하기</button>
    </>
  );
}

export default AddForm;
