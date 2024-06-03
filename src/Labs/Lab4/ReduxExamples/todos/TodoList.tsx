import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function TodoList() {
const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" }]);
const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
const addTodo = (todo: any) => {
const newTodos = [ ...todos, { ...todo,
    id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
};
const deleteTodo = (id: string) => {
const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
};
const updateTodo = (todo: any) => {
const newTodos = todos.map((item) =>
    (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
};
return (
<div>
    <h2>Todo List</h2>
    <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="input-group">
            <input
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              className="form-control"
              placeholder="Enter todo"
            />
            <div className="input-group-append">
            <button
                onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"
                className="btn btn-warning me-2"
              >
                Update
              </button>
              <button
                onClick={() => addTodo(todo)}
                id="wd-add-todo-click"
                className="btn btn-success ml-2"
              >
                Add
              </button>
              </div>
          </div>
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <div>
            <button
                onClick={() => setTodo(todo)}
                id="wd-set-todo-click"
                className="btn btn-primary btn-sm me-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
              
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
        }