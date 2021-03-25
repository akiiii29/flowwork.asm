import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function CheckList({ indexCard, indexList }) {
  return (
    <>
      <TodoList indexCard={indexCard} indexList={indexList} />
      <Form indexCard={indexCard} indexList={indexList} style={{ marginTop: '10px' }} />
    </>
  );
}
