import "./App.css";
import TodoList from "./component/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect } from "react";
import { v4 } from "uuid";
function App() {
  //state, props
  const [todoList, setTodoList] = useState([]); // array;
  const [textInput, setTextInput] = useState(""); // text;
  const TODO_APP_STRORAGE_KEY = "TODO_APP";
  //useEffect
  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STRORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(TODO_APP_STRORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddButtonClick = useCallback(
    (e) => {
      //theem text vao todoList
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);
      setTextInput("");
    },
    [textInput]
  );
  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm.. "
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddButtonClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
