import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "吃饭",
    },
    {
      id: 2,
      title: "睡觉",
    },
  ]);

  return (
    <div className="App">
      <h1>TODO List</h1>

      <input value={todo} />

      <ul>
        {todoList.map(({ id, title }) => (
          <li key={id}>
            <a href="#">{title}</a>
          </li>
        ))}
      </ul>

      <ul className="command-list">
        <li>
          <h3>过滤：</h3>
        </li>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">完成</a>
        </li>
        <li>
          <a href="#">未完成</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
