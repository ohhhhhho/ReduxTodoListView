import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Works() {
  const { todo } = useSelector((state) => state.todos);
  const param = useParams();
  const work = todo.find((ele) => ele.id === parseInt(param.id));
  return (
    <>
      <div style={boxStyle}>
        <Link
          to={"/"}
          style={{
            color: "#222",
            textAlign: "right",
            display: "block",
          }}
        >
          이전으로
        </Link>
        <h1>{work.title}</h1>
        <p>{work.cont}</p>
      </div>
    </>
  );
}
const boxStyle = {
  width: "500px",
  border: "solid 1px #eee",
  textAlign: "center",
  transform: "translate(-50%,-50%)",
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "300px",
  padding: "10px",
};
export default Works;
